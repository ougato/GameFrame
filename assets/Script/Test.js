let dict = {10:null};

cc.log( dict.hasOwnProperty( 10 ) );
delete dict[10];
cc.log( dict.hasOwnProperty( 10 ) );

let arr = [1,2,3];
delete arr[0];
delete arr[1];
cc.log( arr );
