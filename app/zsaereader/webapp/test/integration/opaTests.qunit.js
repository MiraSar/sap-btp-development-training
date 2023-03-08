sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zsae/zsaereader/test/integration/FirstJourney',
		'zsae/zsaereader/test/integration/pages/ReadersList',
		'zsae/zsaereader/test/integration/pages/ReadersObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReadersList, ReadersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zsae/zsaereader') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReadersList: ReadersList,
					onTheReadersObjectPage: ReadersObjectPage
                }
            },
            opaJourney.run
        );
    }
);