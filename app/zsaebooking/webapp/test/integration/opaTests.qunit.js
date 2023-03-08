sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zsae/zsaebooking/test/integration/FirstJourney',
		'zsae/zsaebooking/test/integration/pages/BookingList',
		'zsae/zsaebooking/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, BookingList, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zsae/zsaebooking') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBookingList: BookingList,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);