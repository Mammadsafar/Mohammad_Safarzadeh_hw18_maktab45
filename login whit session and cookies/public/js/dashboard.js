$(document).ready(function () {


    $("#navbar").append(`<button id="logout_btn"
    style='position:absolute; text-decoration: none; border: none; right: 5%; background-color:#f8f9fa!important;'>
    <div class='social-btn flex-center' id="github">
        <i class="fas fa-sign-out-alt"></i><span>Sign Out</span>
    </div>
    </button>
    <button id="edit_btn"data-toggle="modal"
    data-target="#exampleModal"
    style='position:absolute; text-decoration: none; border: none; right: 0%; background-color:#f8f9fa!important;'>
    <div class='social-btn flex-center' id="github">
        <i class="fas fa-edit"></i><span>Update</span>
    </div>
    </button>`);


    let user;

    $.ajax({
        type: "GET",
        url: "/api/userData/getUser",
        // dataType: "application/json",
        success: function (response) {
            user = response[0];


            $("#username").html(`@${user.userName}`)
            $("#fullName").html(`${user.firstName} ${user.lastName}`)
            $("#email").html(`${user.email}`)
            $("#gender").html(`${user.Gender}`)
            $("#birthday").html(`${user.birthDay}`)
            $("#phoneNumber").html(`${user.phoneNumber}`)





        },

        error: function (err) {
            log('Data not found')
        },
    });


    $("#logout_btn").on('click', () => {

        $.ajax({
            type: "GET",
            url: "/api/logout",
            // dataType: "application/json",
            success: function (response) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Out',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload();
            },

            error: function (err) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })

            },
        });

    })


    function show_employee() {

        $("#myModal_user").html("")
        user.userName

        user.email
        user.Gender
        user.birthDay
        user.phoneNumber
        let person =
            `
                <div class="column" id="main">
                            <div class="form-group">
                            <label for="exampleInputName">ID :</label>
                            <input type="name" class="form-control" id="exampleInputName"
                            placeholder="${user.userName}" readOnly>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputName">First Name :</label>
                                <input type="name" class="form-control" id="first_name_input"
                                    value="${user.firstName}">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputName">Last Name :</label>
                                <input type="name" class="form-control" id="last_name_input"
                                    value="${user.lastName}">
                            </div>
                            <div class="form-group">
                            <label for="exampleInputName">Email :</label>
                            <input type="email" class="form-control" id="email_input"
                                value="${user.email}" >
                            </div>

                            <div class="form-group">
                            <label for="exampleInputName">Gender :</label>
                            <input type="name" class="form-control" id="input_gender"
                                value="${user.Gender}">
                            </div>

                            <div class="form-group">
                            <label for="exampleInputName">Phone Number :</label>
                            <input type="name" class="form-control" id="phone_input"
                                value="${user.phoneNumber}" >
                            </div>

                            <div class="form-group">
                            <label for="exampleInputName">Birthday :</label>
                            <input type="name" class="form-control" id="birthday"
                                value="${user.birthDay}">
                            </div>
                            <button id="change_pass_btn" type="submit" class="btn btn-primary" name="${user.userName}">Change Password</button>
                            <button id="update_btn" type="submit" class="btn btn-primary" name="${user.userName}">Update</button>
                            <button id="delete_btn" type="submit" class="btn btn-primary" name="${user.userName}">Delete</button>
                        </div>
                    <div>
                        <?xml version="1.0" encoding="UTF-8"?>
                        <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                            <title>Path</title>
                            <desc>Created with Sketch.</desc>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path
                                    d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z"
                                    id="Path" fill="#F9BC35"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="column" id="secondary">
                        <div class="sec-content">
                            <h1>${user.userName}</h1>
                            <h1>${user.firstName}</h1>
                            <h1>${user.lastName}</h1>
                            <h1>${user.email}</h1>
                            <h1>${user.phoneNumber}</h1>
                            <h1>${user.Gender}</h1>
                            <h1>${user.birthDay}</h1>

                        </div>
                    </div>

                `
        $("#myModal_user").append(person);


    }
    $("body").on('click', '#edit_btn', function () {
        show_employee()
    })


})