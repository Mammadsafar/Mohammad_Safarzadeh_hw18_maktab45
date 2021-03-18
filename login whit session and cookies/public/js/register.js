$(document).ready(function () {

    $("#register_btn").on('click', () => {

        let user = {
            firstName: $("#first_name").val(),
            lastName: $("#last_name").val(),
            userName:$("#username").val(),
            Password:$("#password").val(),
            birthDay:$("#birthday").val(),
            Gender:"male",
            email:$("#email").val(),
            phoneNumber:$("#phone_number").val()
        }
        console.log(user);
        $.ajax({
            type: "POST",
            url: "/api/register",
            data: user,
            // dataType: "application/json",
            success: function (response) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'SignUp successfuly',
                    showConfirmButton: false,
                    timer: 1500
                })
                // window.location.href = "login";
            },

            error: function (err) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'This user or password is invalid',
                    showConfirmButton: false,
                    timer: 1500
                })

            },
        });

    })




})