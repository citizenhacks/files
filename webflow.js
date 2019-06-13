$(document).ready(function () {
    $(":input, a").attr("tabindex", "-1");
    $('#begin-step').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });
    $('#name-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#name-step').click(function (e) {
        e.preventDefault();
        const re = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/;
        if (re.test($('#name-input').val())) {
            $('#name-alert').hide();
            $('.w-round div:nth-child(3)').trigger('tap');
        } else {
            $('#name-alert').show();
        }
    });
    $('#name-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(1)').trigger('tap');
    });
    $('#email-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#email-step').click(function (e) {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test($('#email-input').val())) {
            $('#email-alert').hide();
            $('.w-round div:nth-child(4)').trigger('tap');
        } else {
            $('#email-alert').show();
        }
    });
    $('#email-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
    });
    $('#phone-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#phone-step').click(function (e) {
        e.preventDefault();
        const re = /^(?:(\d{3})|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
        if (re.test($('#phone-input').val())) {
            $('#phone-alert').hide();
            $('.w-round div:nth-child(5)').trigger('tap');
        } else {
            $('#phone-alert').show();
        }
    });
    $('#phone-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
    });
    $('#age-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#age-step').click(function (e) {
        e.preventDefault();
        const re = /^\d+$/;
        if (re.test($('#age-input').val())) {
            $('#age-alert').hide();
            $('.w-round div:nth-child(6)').trigger('tap');
        } else {
            $('#age-alert').show();
        }
    });
    $('#age-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
    });
    $("input[name='Gender']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#gender-step').click(function (e) {
        e.preventDefault();
        if (!$("input[name='Gender']").is(':checked')) {
            $('#gender-alert').show();
        } else {
            $('#gender-alert').hide();
            $('.w-round div:nth-child(7)').trigger('tap');
        }
    });
    $('#gender-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(5)').trigger('tap');
    });
    $("input[name='Study']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#study-step').click(function (e) {
        e.preventDefault();
        if (!$("input[name='Study']").is(':checked')) {
            $('#study-alert').show();
        } else {
            $('#study-alert').hide();
            $('.w-round div:nth-child(8)').trigger('tap');
        }
    });
    $('#study-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(6)').trigger('tap');
    });
    $('#school-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#school-step').click(function (e) {
        e.preventDefault();
        if ($('#school-input').val() != '') {
            $('#school-alert').hide();
            $('.w-round div:nth-child(9)').trigger('tap');
        } else {
            $('#school-alert').show();
        }
    });
    $('#school-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(7)').trigger('tap');
    });
    $('#major-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#major-step').click(function (e) {
        e.preventDefault();
        if ($('#major-input').val() != '') {
            $('#major-alert').hide();
            $('.w-round div:nth-child(10)').trigger('tap');
        } else {
            $('#major-alert').show();
        }
    });
    $('#major-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(8)').trigger('tap');
    });
    $('#github-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#github-step').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });
    $('#github-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(9)').trigger('tap');
    });
    $('#about-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#about-step').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });
    $('#about-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(10)').trigger('tap');
    });
    $('#project-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#project-step').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(13)').trigger('tap');
    });
    $('#project-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(11)').trigger('tap');
    });
    $('#citizen-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#citizen-step').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(14)').trigger('tap');
    });
    $('#citizen-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(12)').trigger('tap');
    });
    $('#diet-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#diet-step').click(function (e) {
        e.preventDefault();
        if ($('#diet-input').val() != '') {
            $('#diet-alert').hide();
            $('.w-round div:nth-child(15)').trigger('tap');
        } else {
            $('#diet-alert').show();
        }
    });
    $('#diet-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(13)').trigger('tap');
    });
    $('#teamOne-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#teamTwo-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#teamThree-input').keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#team-step').click(function (e) {
        e.preventDefault();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let cond = true
        $('#team-alert').hide();
        if ($('#teamOne-input').val() != "" && !re.test($('#teamOne-input').val())) {
            cond = false;
        }
        if ($('#teamTwo-input').val() != "" && !re.test($('#teamTwo-input').val())) {
            cond = false;
        }
        if ($('#teamThree-input').val() != "" && !re.test($('#teamThree-input').val())) {
            cond = false;
        }
        if (cond) {
            $('.w-round div:nth-child(16)').trigger('tap');
        } else {
            $('#team-alert').show();
        }
    });
    $('#team-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(14)').trigger('tap');
    });
    $("input[name='newsletter']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
        $("#newsletter").prop("checked", false);
    });
    $("input[name='privacy']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $("input[name='conduct']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $("input[name='honest']").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    $('#last-prev').click(function (e) {
        e.preventDefault();
        $('.w-round div:nth-child(15)').trigger('tap');
    });
});
Webflow.push(function () {
    $(document).off('submit');
    $('#application').submit(function (e) {
        $('#last-alert').hide();
        $('#last-alert').text("Please check all of the boxes above.");
        e.preventDefault();
        if ($("input[name='newsletter']").is(':checked') && $("input[name='privacy']").is(':checked') && $("input[name='conduct']").is(':checked') && $("input[name='honest']").is(':checked')) {
            const firstName = $('#name-input').val().split(' ').slice(0, -1).join(' ');
            const lastName = $('#name-input').val().split(' ').slice(-1).join(' ');
            const email = $('#email-input').val();
            const gender = $("input:radio[name='Gender']:checked").val();
            const age = parseInt($('#age-input').val(), 10);
            const levelOfStudy = $("input:radio[name='Study']:checked").val();
            const about = $('#about-input').val();
            const citizen = $('#citizen-input').val();
            const project = $('#project-input').val();
            const diet = $('#diet-input').val();
            const school = $('#school-input').val();
            const major = $('#major-input').val();
            const githubURI = $('#github-input').val();
            const teamOne = $('#teamOne-input').val();
            const teamTwo = $('#teamTwo-input').val();
            const teamThree = $('#teamThree-input').val();
            fetch('https://api.citizenhacks.com/application/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    gender,
                    age,
                    levelOfStudy,
                    passionQuestion: about,
                    citizenshipQuestion: citizen,
                    pastProjectQuestion: project,
                    diet,
                    school,
                    major,
                    githubLink: githubURI,
                    teamOne,
                    teamTwo,
                    teamThree,
                })
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                if (json.success) {
                    $('.w-round div:nth-child(17)').trigger('tap');
                } else {
                    $('#last-alert').text(json.error);
                    $('#last-alert').show();
                }
            }).catch(function (err) {
                $('#last-alert').text("An error has occured. Please try again.");
                $('#last-alert').show();
                console.log(err);
            });
        } else {
            $('#last-alert').show();
        }
    })
})
