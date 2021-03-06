const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const mongooseDelete = require('mongoose-delete')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')

const referenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})

const clientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    document: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    interest: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    dateBegin: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ['disabled', 'enable'],
      default: 'enable',
      required: true
    },
    jobRank: {
      type: String,
      required: true
    },
    addressJob: {
      type: String,
      required: true
    },
    sectionJob: {
      type: String,
      required: true
    },
    references: {
      type: [referenceSchema],
      default: []
    },
    payments: {
      type: Array,
      default: []
    },
    customData: {
      type: Object
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

clientsSchema.post('save', () => {
  console.log('INSERCION EN clientss')
})

clientsSchema.pre('findOneAndRemove', async () => {
  console.log('DELETE EN clientss')
})

clientsSchema.post('findOneAndUpdate', async () => {
  console.log('ACTUALIZACION EN clientss')
})

clientsSchema.plugin(mongooseDelete)
clientsSchema.plugin(mongoosePaginate)
clientsSchema.plugin(aggregatePaginate)
module.exports = mongoose.model('clients', clientsSchema)
