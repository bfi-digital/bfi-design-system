export default [
    {
        id: "1",
        dateTimeStart: "2021-10-08T18:00",
        dateTimeEnd: "2021-10-18T23:55",
        availability: "On sale now",
        platform: "youtube",
        bookingRequired: "Free",
        ctaURL: "https://player.bfi.org.uk/subscription/film/watch-lynn-lucy-2019-online",
    },
    {
        id: "2",
        dateTimeStart: "2021-10-08T13:00",
        dateTimeEnd: "2021-10-08T14:28",
        availability: "Available soon",
        platform: "southbank",
        location: "BFI Southbank",
        screen: "Screen 3",
        bookingRequired: "Free",
        ctaURL: "https://whatson.bfi.org.uk/Online/default.asp",
        on_sale_dates: [
            {
                on_sale: "2021-02-23 00:00:00",
                type: "public",
            },
            {
                on_sale: "2021-02-19 00:00:00",
                type: "priority",
            }
        ],
    },
    {
        id: "3",
        performanceInfo: "Booking will be available soon!",
        dateTimeStart: "2021-10-08T18:00",
        dateTimeEnd: "2021-10-08T23:00",
        availability: "Sold out",
        platform: "southbank",
        location: "BFI Southbank",
        screen: "Screen 2",
        bookingRequired: "Paid",
        ctaURL: "https://whatson.bfi.org.uk/Online/default.asp",
    },
    {
        id: "4",
        dateTimeStart: "2021-02-26T15:00",
        dateTimeEnd: "2021-02-27T23:00",
        availability: "unavailable",
        platform: "southbank",
        location: "BFI Southbank",
        screen: "Screen 2",
        bookingRequired: "Free",
        ctaURL: "https://player.bfi.org.uk/subscription/film/watch-lynn-lucy-2019-online",
        on_sale_dates: [
            {
                on_sale: "2021-02-23 00:00:00",
                type: "public",
            },
            {
                on_sale: "2021-02-19 00:00:00",
                type: "priority",
            }
        ],
    },
    {
        id: "5",
        performanceInfo: "BFI Player without end date",
        dateTimeStart: "2021-02-15T18:00",
        dateTimeEnd: "2021-02-27T18:00",
        availability: "available",
        platform: "player",
        location: "BFI Southbank",
        screen: "",
        paywall: "paid",
        ctaURL: "https://player.bfi.org.uk/subscription/film/watch-lynn-lucy-2019-online",
        bookingRequired: "Free",
        on_sale_dates: [
            {
                on_sale: "2021-02-23 00:00:00",
                type: "public",
            },
            {
                on_sale: "2021-02-19 00:00:00",
                type: "priority",
            }
        ],
    },
    {
        id: "6",
        performanceInfo: "BFI Player without end date or time",
        dateTimeStart: "2021-10-15T00:00",
        availability: "available",
        platform: "player",
        location: "BFI Southbank",
        screen: "",
        bookingRequired: "Paid",
        ctaURL: "https://player.bfi.org.uk/subscription/film/watch-lynn-lucy-2019-online"
    }
]