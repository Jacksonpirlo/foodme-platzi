'use strict'
exports.config={ 
    app_name:['Foodme'],
    license_key:process.env.LICENSE_KEY || "2a717e2292bbbe5558951d66aa05703972a7NRAL",
    logging:{level:'info'},
    allow_all_headers:true,
    attributes:{
        exclude:[
        'request.headers.cookie',
        'request.headers.authorization',
        'request.headers.proxyAuthorization',
        'request.headers.setCookie*',
        'request.headers.x*',
        'response.headers.cookie',
        'response.headers.authorization',
        'response.headers.proxyAuthorization',
        'response.headers.setCookie*',
        'response.headers.x*']
    }
}