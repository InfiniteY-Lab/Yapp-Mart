import mongoose from 'mongoose'

const aboutUsSchema = mongoose.Schema(
  {
    descriptionTitleOne: {
      type: String,
      required: true,
    },
    descriptionOne: {
      type: String,
      required: true,
    },
    descriptionTitleTwo: {
      type: String,
      required: true,
    },
    descriptiontwo: {
        type: String,
        required: true,
      }
  },
)

const Aboutus = mongoose.model('Aboutus', aboutUsSchema)

export default Aboutus