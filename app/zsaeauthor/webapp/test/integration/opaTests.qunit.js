sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zsae/zsaeauthor/test/integration/FirstJourney',
		'zsae/zsaeauthor/test/integration/pages/AuthorsList',
		'zsae/zsaeauthor/test/integration/pages/AuthorsObjectPage',
		'zsae/zsaeauthor/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zsae/zsaeauthor') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);