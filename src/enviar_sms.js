
import * as twilio from '../node_modules/twilio'

const accountSid = import.meta.env.VITE_TWILIO_ACCOUNT_SID,
authToken  = import.meta.env.VITE_TWILIO_AUTH_TOKEN

const client = new twilio.Twilio(accountSid,authToken);

export const enviar_sms = ()=>{

    console.log(import.meta.env)

}
