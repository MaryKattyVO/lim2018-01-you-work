window.sendMandrill = (visitorDate) => {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
            'message': {
                "html": `<p>${visitorDate.name} está esperando en el Lobi de Coworking Comunal</p>`,
                "text": "Notificación Cita",
                "subject": `${visitorDate.name} le ha enviado un mensaje`,
                "from_email": "alejandra@laboratoria.la",
                "from_name": "Notificación Cita",
                "to": [
                    {
                        "email": "mkvicunaore@gmail.com",
                        "name": "Mary Katty",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": "marycatty@laboratoria.la"
                }

            },
            "async": false,
            "ip_pool": "Main Pool",
            "send_at": "2018-08-06 10:00:00"
        }
    });
}