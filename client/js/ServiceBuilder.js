var ServiceBuilder = {
    asJSON: true,
    create: function(obj) {
        if(ServiceBuilder.asJSON) {
            return JSON.stringify(obj);
        } else {
            return obj;
        }
    },
    build: {
        join: function (username, room) {
            var json = {
                request: 0,
                data: {
                    username: username,
                    room: room
                }
            };
            return ServiceBuilder.create(json);
        },

        ping: function (username) {
            var json = {
                request: 1,
                data: {
                    username: username
                }
            };
            return ServiceBuilder.create(json);
        },

        message: function (username, message, room) {
            var json = {
                request: 2,
                data: {
                    username: username,
                    message: message,
                    room: room
                }
            };
            return ServiceBuilder.create(json);
        },

        userList: function (room) {
            var json = {
                request: 3,
                data: {
                    room: room
                }
            };
            return ServiceBuilder.create(json);
        }, 

        roomList: function (that) {
            var json = {
                request: 4
            };
            return ServiceBuilder.create(json);
        },

        nextSlide: function () {
            var json = {
                request: 5,
            };
            return ServiceBuilder.create(json);
        }, 

        previousSlide: function () {
            var json = {
                request: 6
            };
            return ServiceBuilder.create(json);
        },  

        jumpToSlide: function (slideNumber) {
            var json = {
                request: 7,
                data: slideNumber
            };
            return ServiceBuilder.create(json);
        }
    }
};
