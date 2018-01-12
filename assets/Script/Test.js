let dict = {10:null};

cc.log( dict.hasOwnProperty( 10 ) );
delete dict[10];
cc.log( dict.hasOwnProperty( 10 ) );