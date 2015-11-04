var hatDataSourceConfig = {
  events: {
    name: "events",
    source: "facebook",
    fields: [
      { name: "id" },
      { name: "name" },
      { name: "description" },
      { name: "start_time" },
      { name: "end_time" },
      { name: "rsvp_status" }
    ],
    subTables: [
      {
        name: "place",
        source: "facebook",
        fields: [
          { name: "id" },
          { name: "name" }
        ],
        subTables: [
          {
            name: "location",
            source: "facebook",
            fields: [
              { name: "city" },
              { name: "country" },
              { name: "latitude" },
              { name: "longitude" },
              { name: "located_in" },
              { name: "name" },
              { name: "state" },
              { name: "street" },
              { name: "zip" }
            ]
          }
        ]
      }
    ]
  },
  posts: {
    name: "posts",
    source: "facebook",
    fields: [
      { name: "id" },
      { name: "caption" },
      { name: "created_time" },
      { name: "description" },
      { name: "link" },
      { name: "message" },
      { name: "name" },
      { name: "object_id" },
      { name: "picture" },
      { name: "status_type" },
      { name: "story" },
      { name: "type" },
      { name: "updated_time" }
    ],
    subTables: [
      {
        name: "from",
        source: "facebook",
        fields: [
          { name: "name" },
          { name: "id" }
        ]
      }, {
        name: "privacy",
        source: "facebook",
        fields: [
          { name: "value" },
          { name: "description" },
          { name: "friends" },
          { name: "allow" },
          { name: "deny" }
        ]
      }, {
        name: "application",
        source: "facebook",
        fields: [
          { name: "category" },
          { name: "link" },
          { name: "name" },
          { name: "namespace" },
          { name: "id" }
        ]
      }
    ]
  }
}

module.exports = hatDataSourceConfig;