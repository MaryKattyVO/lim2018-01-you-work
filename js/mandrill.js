window.sendMandrill = (visitorDate) => {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
            'message': {
                "html": "<p>B</p>",
                "text": "Example text content",
                "subject": "otro subject",
                "from_email": "alejandra@laboratoria.la",
                "from_name": "Example Name",
                "to": [
                    {
                        "email": "mkvicunaore@gmail.com",
                        "name": "Recipient Name",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": "alejandra@laboratoria.la"
                }

            },
            "async": false,
            "ip_pool": "Main Pool",
            "send_at": "2018-08-06 10:00:00"
        }
    });
}