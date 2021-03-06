define({ "api": [
  {
    "type": "post",
    "url": "/user/register",
    "title": "create",
    "name": "create_a_Teacher",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of teacher</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of teacher</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subject",
            "description": "<p>subject of teacher</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of teacher</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"name\":\"vanshsir\", \n\t\"email\":\"vanshsir@gmail.com\",\n \"subject\":\"maths\",\n \"password\":\"112233\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n{\n  \"_id\": \"5e19ac4bd864e010d12cfd7b\",\n  \"name\": \"vanshsir\",\n  \"email\": \"vanshsir@gmail.com\",\n  \"password\": \"$2a$10$bplb5mMvXYvoAQHlOzoEKOBLNyHhkb.IGqs8kNiysPDYbzxsbeJae\",\n  \"subject\": \"maths\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "Teacher"
  },
  {
    "type": "get",
    "url": "/user/all",
    "title": "get all teachers",
    "name": "get_all_Teacher",
    "group": "Teacher",
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n[\n  {\n      \"_id\": \"5e177a5c4066097e45e37eeb\",\n      \"name\": \"vansh\",\n      \"email\": \"vansh@gmail.com\",\n      \"password\": \"$2a$10$uk.f5LuGC/wPFKlWWw.oiuVYqHhzcdQvhTpabFqhy/JXFO/lgbutq\",\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e1888ff32806520e603b7d1\",\n      \"name\": \"vnsh\",\n      \"email\": \"vkss@gmail.com\",\n      \"password\": \"$2a$10$l9UFQZiSZ1OugwSqVwxISuIXHDR58CH0ggkQsaq05rQmv8SgvepYa\",\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e18893afa8c822145875a32\",\n      \"name\": \"vnsh\",\n      \"email\": \"vk@gmail.com\",\n      \"password\": \"$2a$10$IJVgeNRqDbipM.3iNOaXSe.R9lMEy.kfZ0N5pXz/GoAXZbxUEdDL.\",\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e188b52d6b70722dca82280\",\n      \"name\": \"vnsh\",\n      \"email\": \"vk7@gmail.com\",\n      \"password\": \"$2a$10$71pEWTb5rVCsXKQizheZ/OPv78FseE0Y5Hxq1hFBTfgIWUmsdAyZK\",\n      \"subject\": \"maths\",\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e19ac4bd864e010d12cfd7b\",\n      \"name\": \"vanshsir\",\n      \"email\": \"vanshsir@gmail.com\",\n      \"password\": \"$2a$10$bplb5mMvXYvoAQHlOzoEKOBLNyHhkb.IGqs8kNiysPDYbzxsbeJae\",\n      \"subject\": \"maths\",\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "Teacher"
  },
  {
    "type": "get",
    "url": "/user/current",
    "title": "get current teachers",
    "name": "get_current_Teacher",
    "group": "Teacher",
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n{\n  \"usr\": {\n      \"_id\": \"5e19ac4bd864e010d12cfd7b\",\n      \"name\": \"vanshsir\",\n      \"email\": \"vanshsir@gmail.com\",\n      \"password\": \"$2a$10$bplb5mMvXYvoAQHlOzoEKOBLNyHhkb.IGqs8kNiysPDYbzxsbeJae\",\n      \"subject\": \"maths\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "Teacher"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "login",
    "name": "login_a_Teacher",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of teacher</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of teacher</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"email\":\"vanshsir@gmail.com\",\n \"password\":\"112233\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n{\n  \"success\": true,\n  \"token\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTlhYzRiZDg2NGUwMTBkMTJjZmQ3YiIsIm5hbWUiOiJ2YW5zaHNpciIsImlhdCI6MTU3ODc0MDg4OSwiZXhwIjoxNTc4NzQ1ODg5fQ.z_wV7LvpAodo3GbEoa9ktsl1uJj8WeS4Uz28h3lVCUo\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "Teacher"
  }
] });
