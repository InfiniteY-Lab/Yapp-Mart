import mongoose from 'mongoose'

const teamSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
      unique: true,
    },
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
  },
)

const Team = mongoose.model('Team', teamSchema)

export default Team