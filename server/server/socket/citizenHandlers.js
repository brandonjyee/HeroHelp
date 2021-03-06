const {
  CitizenSends,
  IncidentState,
  CitizenState,
  HeroState
} = require('./MsgType')
const {sendAckHelpRequestToCitizen} = require('./citizenSenders')
const {sendDispatchToHero} = require('./heroSenders')
const {queueIncidentDispatch} = require('./internalEventHandlers')
const {getCitizenIdFromSocket, getSocketFromHeroId} = require('./socketMaps')

const {Citizen, Hero, User, Incident} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// Handle incoming messages from Citizens
module.exports.registerCitizenHandlers = socket => {
  socket.on(CitizenSends.ASK_FOR_HERO_HELP, async msgBody => {
    console.log('ASK_FOR_HERO_HELP received.')
    const {lat, lon} = msgBody
    const citizenId = getCitizenIdFromSocket(socket.id)

    let incident
    let needNewIncident = true
    try {
      //check if citizen is already linked to an incident
      incident = await Incident.findOne({
        where: {
          state: {[Op.ne]: IncidentState.RESOLVED},
          citizenId
        }
      })
      console.log('found active incident for citizen', incident)
      if (incident) {
        needNewIncident = false
      }
    } catch (err) {
      //fall through, try to create incident and have error happen there
    }

    //if need new incident, then create it and queue dispatching
    try {
      if (needNewIncident) {
        console.log('need new incident')
        incident = await Incident.create({
          citizenId,
          lat,
          lon,
          state: IncidentState.WAITING_FOR_DISPATCH
        })
      }
      queueIncidentDispatch(incident.id,0)

      // Update entities in DB
      const citizen = await Citizen.findById(citizenId)
      await citizen.update({state: CitizenState.WAIT_FOR_HERO_DISPATCH})

      // Notify Citizen
      sendAckHelpRequestToCitizen(socket)

      // // ***** START Temporary Dispatch code for testing ONLY. ****
      // // Dispatch to heroId 1
      // const heroIdTest = 1
      // // Update entities in DB
      // await incident.update({
      //   heroId: heroIdTest,
      //   state: IncidentState.WAITING_FOR_HERO_DECISION
      // })
      // const hero = await Hero.findById(heroIdTest)
      // await hero.update({state: HeroState.DECIDING_ON_DISPATCH})

      // // Send dispatch msg to hero
      // // ***********Socket.emit not working
      // const heroSocket = getSocketFromHeroId(heroIdTest)
      // heroSocket.emit("GIVE_DISPATCH")
      // console.log('heroSocket:', heroSocket)
      // const timeout = 30 // seconds
      // sendDispatchToHero(heroSocket, lat, lon, incident.id, timeout)
      // // ******   END *************
    } catch (err) {
      console.log('unable to create incident', err)
      //citizen won't get response if can't create incident
    }
  })
}
