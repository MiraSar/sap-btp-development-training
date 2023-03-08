namespace epam.sap.dev.library;

using { managed } from '@sap/cds/common';

using { masterdata } from './master-data';

using { sap.common.CodeList, Currency } from './common';


entity Booking: managed {
    key bookingUUID                  : UUID;
        bookingID                    : Integer;
        bookID                       : Association to Books;
        readerID                     : Association to Readers;
        authorID                     : Association to Authors;
        bookingStatus                : Association to one masterdata.Statuses;
        beginDate                    : Date;
        beginTime                    : Time;
        endDate                      : Date;
        endTime                      : Time;
        image                        : LargeBinary @Core.MediaType : 'image/png';
}


entity Authors: managed {
    key authorUUID : UUID;
        authorID   : Integer;
        firstName  : String(15);
        lastName   : String(15);
        birthday   : Date;
        country    : String(30);
        image      : LargeBinary @Core.MediaType : 'image/png';
        book       : Association to many Books on book.toAuthor = $self;
};


entity Books: managed {
    key bookUUID     : UUID;
        bookID       : Integer;
        toAuthor     : Association to Authors;
        bookName     : String(60);
        pageNumber   : Integer;
        copyQty      : Integer;
        shippedQty   : Integer;
        price        : Decimal(15, 2);
        currencyCode : Currency;
        status       : Association to one masterdata.BookStatuses;
        image        : LargeBinary @Core.MediaType : 'image/png';
}


entity Readers: managed {
    key readerUUID    : UUID;
        readerID      : Integer;
        firstName     : String(15);
        lastName      : String(15);
        readerBithday : Date;
        phoneNumber   : String(15);
        image         : LargeBinary @Core.MediaType : 'image/png';
}


