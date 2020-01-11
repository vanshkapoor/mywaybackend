define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/doc/main.js",
    "group": "/home/vansh/Desktop/mywaybackend/docs/doc/main.js",
    "groupTitle": "/home/vansh/Desktop/mywaybackend/docs/doc/main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/docs/main.js",
    "group": "/home/vansh/Desktop/mywaybackend/docs/docs/main.js",
    "groupTitle": "/home/vansh/Desktop/mywaybackend/docs/docs/main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "/home/vansh/Desktop/mywaybackend/docs/main.js",
    "groupTitle": "/home/vansh/Desktop/mywaybackend/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/classes/create/:id",
    "title": "create",
    "name": "Add_a_student_to_class_also_updates_studentclass",
    "group": "Class",
    "permission": [
      {
        "name": "Teacher"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of student</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"email\":\"vansh@gmail.com\",\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n{\n  \"TotalCLass\": 1,\n  \"_id\": \"5e19b3f9d864e010d12cfd7f\",\n  \"user\": \"5e19ac4bd864e010d12cfd7b\",\n  \"student\": \"vansh@gmail.com\",\n  \"date\": \"2020-01-11T11:39:37.097Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/classes.js",
    "groupTitle": "Class"
  },
  {
    "type": "post",
    "url": "/classes/create",
    "title": "create",
    "name": "create_a_class",
    "group": "Class",
    "permission": [
      {
        "name": "Teacher"
      }
    ],
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
          "title": "response-example",
          "content": "\n{\n  \"TotalCLass\": 1,\n  \"_id\": \"5e19b321d864e010d12cfd7d\",\n  \"user\": \"5e19ac4bd864e010d12cfd7b\",\n  \"students\": [],\n  \"date\": \"2020-01-11T11:36:01.435Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/classes.js",
    "groupTitle": "Class"
  },
  {
    "type": "get",
    "url": "/classes/teacher",
    "title": "get current teachers classes",
    "name": "get_current_Teacher",
    "group": "Classes",
    "permission": [
      {
        "name": "Teacher"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n[\n  {\n      \"TotalCLass\": 1,\n      \"_id\": \"5e19b321d864e010d12cfd7d\",\n      \"user\": \"5e19ac4bd864e010d12cfd7b\",\n      \"students\": [\n          {\n              \"_id\": \"5e19b3f7d864e010d12cfd7e\",\n              \"student\": \"vansh@gmail.com\"\n          }\n      ],\n      \"date\": \"2020-01-11T11:36:01.435Z\",\n      \"__v\": 1\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/classes.js",
    "groupTitle": "Classes"
  },
  {
    "type": "get",
    "url": "/classes/student",
    "title": "get current students attendance record for all teachers",
    "name": "get_current_students_attendance",
    "group": "Classes",
    "permission": [
      {
        "name": "student"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n[\n  {\n      \"TotalCLass\": 1,\n      \"_id\": \"5e18f2ff08c9b7645cf6be19\",\n      \"user\": \"5e188b52d6b70722dca82280\",\n      \"student\": \"vv@gmail.com\",\n      \"date\": \"2020-01-10T21:56:15.851Z\",\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/classes.js",
    "groupTitle": "Classes"
  },
  {
    "type": "post",
    "url": "/student/register",
    "title": "create",
    "name": "create_a_Student",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of student</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of student</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of student</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"name\":\"vansh\", \n\t\"email\":\"vanshstudent@gmail.com\",\n \"password\":\"112233\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n{\n  \"_id\": \"5e19b18dd864e010d12cfd7c\",\n  \"name\": \"vansh\",\n  \"email\": \"vanshstudent@gmail.com\",\n  \"password\": \"$2a$10$s6UMOOao5njwFrgsIlJyn.QsBEUODS5odQG35CgU9.j23B3vKPq7m\",\n \"classes\": 1,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/student.js",
    "groupTitle": "Student"
  },
  {
    "type": "get",
    "url": "/student/current",
    "title": "get current student",
    "name": "get_current_student",
    "group": "Student",
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n{\n  \"usr\": {\n      \"_id\": \"5e19b18dd864e010d12cfd7c\",\n      \"name\": \"vansh\",\n      \"email\": \"vanshstudent@gmail.com\",\n      \"password\": \"$2a$10$s6UMOOao5njwFrgsIlJyn.QsBEUODS5odQG35CgU9.j23B3vKPq7m\",\n      \"classes\": 1,\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/student.js",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/student/login",
    "title": "login",
    "name": "login_a_Student",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of student</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of student</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"email\":\"vanshstudent@gmail.com\",\n \"password\":\"112233\"\n}",
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
    "filename": "./routes/student.js",
    "groupTitle": "Student"
  },
  {
    "type": "get",
    "url": "/student/all",
    "title": "get all students",
    "name": "get_all_students",
    "group": "Students",
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n[\n  {\n      \"_id\": \"5e1884e4176c1e1ccb18fd7c\",\n      \"name\": \"vansh\",\n      \"email\": \"vv@gmail.com\",\n      \"password\": \"$2a$10$XjmeWb28tj7weFmFyCdKLesellxC4HU8fh6rHLlUScAdhQRmNW/lC\",\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e188ac23925f821c4cc5696\",\n      \"name\": \"vansh\",\n      \"email\": \"vsv@gmail.com\",\n      \"password\": \"$2a$10$Zhk49NzkElQ470.tF9VqLO.u0IYq06WNu3V1mlEJKGJ1K2uCC7I/G\",\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e188b44d6b70722dca8227f\",\n      \"name\": \"vansh\",\n      \"email\": \"v@gmail.com\",\n      \"password\": \"$2a$10$F0Uwo9IDQIMb7VBYpWOE4uqxVHgOQPBIgB/TjoXdCJDlwqrftfVIW\",\n      \"classes\": 1,\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e18fed7f79216694c14b716\",\n      \"name\": \"vansh\",\n      \"email\": \"v1@gmail.com\",\n      \"password\": \"$2a$10$suHQSWy8K2Z1q94kzn05i.fb9cKUsj1gdXYBbKnR.hjhikUn/Zb4K\",\n      \"classes\": 1,\n      \"__v\": 0\n  },\n  {\n      \"_id\": \"5e19b18dd864e010d12cfd7c\",\n      \"name\": \"vansh\",\n      \"email\": \"vanshstudent@gmail.com\",\n      \"password\": \"$2a$10$s6UMOOao5njwFrgsIlJyn.QsBEUODS5odQG35CgU9.j23B3vKPq7m\",\n      \"classes\": 1,\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/student.js",
    "groupTitle": "Students"
  },
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
    "url": "/user/all",
    "title": "get all classes",
    "name": "get_all_classes",
    "group": "Teacher",
    "permission": [
      {
        "name": "Teacher"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "\n[\n  {\n      \"TotalCLass\": 2,\n      \"_id\": \"5e18a8ebce6f4e31bcb482a1\",\n      \"user\": \"5e18893afa8c822145875a32\",\n      \"students\": [],\n      \"date\": \"2020-01-10T16:40:11.044Z\",\n      \"__v\": 0\n  },\n  {\n      \"TotalCLass\": 4,\n      \"_id\": \"5e18c86344f59b442afe63c8\",\n      \"user\": \"5e188b52d6b70722dca82280\",\n      \"students\": [\n          {\n              \"_id\": \"5e18e5a620224558754a777c\",\n              \"student\": \"v@gmail.com\"\n          },\n          {\n              \"_id\": \"5e18e6faf27515597aa14b92\",\n              \"student\": \"vv@gmail.com\"\n          },\n          {\n              \"_id\": \"5e18e7db7eb78d59f648c78f\",\n              \"student\": \"vsv@gmail.com\"\n          },\n          {\n              \"_id\": \"5e199b6e636b8176c1b7f3d9\",\n              \"student\": \"v1@gmail.com\"\n          }\n      ],\n      \"date\": \"2020-01-10T18:54:27.966Z\",\n      \"__v\": 4\n  },\n  {\n      \"TotalCLass\": 1,\n      \"_id\": \"5e18aa53ce6f4e31bcb482a2\",\n      \"user\": \"5e188b52d6b70722dca82280\",\n      \"students\": [\n          {\n              \"_id\": \"5e18eee0a5b3ff614b1f696d\",\n              \"student\": \"vsv@gmail.com\"\n          },\n          {\n              \"_id\": \"5e18f2fe08c9b7645cf6be18\",\n              \"student\": \"vv@gmail.com\"\n          }\n      ],\n      \"date\": \"2020-01-10T16:46:11.376Z\",\n     \"__v\": 12\n  },\n  {\n      \"TotalCLass\": 1,\n      \"_id\": \"5e19b321d864e010d12cfd7d\",\n      \"user\": \"5e19ac4bd864e010d12cfd7b\",\n      \"students\": [\n          {\n              \"_id\": \"5e19b3f7d864e010d12cfd7e\",\n              \"student\": \"vansh@gmail.com\"\n          }\n      ],\n     \"date\": \"2020-01-11T11:36:01.435Z\",\n      \"__v\": 1\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/classes.js",
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
