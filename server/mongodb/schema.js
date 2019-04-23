const mongoose = require('mongoose')
const { Schema } = mongoose
const { Mixed } = Schema.Types

module.exports = [
  {
    id: 'UserAccount',
    name: 'db-account',
    schema: Schema({
      username: { type: String, index: true },
      fullname: { type: String, index: true },
      email: { type: String, index: true },
      level: { type: Number, index: true },
      pwd: String,
      enabled: { type: Boolean, index: true },
      lasted: { type: Date, index: true },
      updated: Date,
      created: Date,
    })
  },
  {
    id: 'TaskList',
    name: 'db-tasklist',
    schema: Schema({
      description: String,
      project: { type: String, index: true },
      duedate: { type: Date, index: true },
      priority: { type: Number, index: true },
      assign: Array,
      tags: Array,
      deleted: { type: Boolean, index: true },
      updated: Date,
      created: Date,
    })
  },
  {
    id: 'TaskList',
    name: 'db-tasklist-history',
    schema: Schema({
      description: String,
      project: { type: String, index: true },
      duedate: { type: Date, index: true },
      priority: { type: Number, index: true },
      tags: Array,
      deleted: { type: Boolean, index: true },
      updated: Date,
      created: Date,
    })
  },
  {
    id: 'TaskList',
    name: 'db-tasklist-comment',
    schema: Schema({
      description: String,
      project: { type: String, index: true },
      duedate: { type: Date, index: true },
      priority: { type: Number, index: true },
      tags: Array,
      deleted: { type: Boolean, index: true },
      updated: Date,
      created: Date,
    })
  }
]
