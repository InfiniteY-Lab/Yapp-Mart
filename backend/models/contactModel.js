import mongoose from 'mongoose'

const contactSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    customerCare: {
      type: String,
      required: true,
    },
    callUstwoFourSeven: {
      type: String,
      required: true,
    },
    callUsFromAbroad: {
        type: String,
        required: true,
      },
      addressBarOne: {
        type: String,
        required: true,
      },
      addressBarTwo: {
        type: String,
        required: true,
      },
      addressBar: {
          type: String,
          required: true,
        },
  },
)

const Contact = mongoose.model('Contact', contactSchema)

export default Contact