# Member App

## About

Backend of Member App to manage daily members

**Implemented Features:**

- Display list of members
- User can create new members
- User can delete members
- User can check members as completed
- No more than 100 members are allowed
- Special Characters are not allowed

**Not-implemented desired features:**

- User Auth

## [Live Demo](https://ssraf-member-app.herokuapp.com/)

## Built with

- React
- Typescript

## Backend

Project Link: [https://github.com/rafaelsanchezsouza/member-app-backend](https://github.com/rafaelsanchezsouza/member-app-backend)

### Endpoints

Member Listing

    GET /api/v1/members HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/member-app-backend

    Response 200
    {
        "items": [
            {
                "item": "lorem",
                "done": false,
                "id": "1"
            }
        ]
    }

Create Member

    POST /api/v1/members HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/member-app-backend

    Body
    {
        "item": "lorem",
        "done": false
    }

Update member to "done"

    PUT /api/v1/members/{id} HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/member-app-backend

    Body
    {
        "item": "lorem",
        "done": true
    }

Delete Member

    DELETE /api/v1/members/{id} HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/member-app-backend

    Response
    {
        "item": "lorem",
        "done": false,
        "id": 11,
    }

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Linkedin - [@ssraf](https://www.linkedin.com/in/ssraf/)

Project Link: [https://github.com/rafaelsanchezsouza/member-app](https://github.com/rafaelsanchezsouza/member-app)
