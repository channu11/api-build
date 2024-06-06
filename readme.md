## Express
- public accessible

- code accessible
   /src


## Featrued CRUD
- User Management
 a. User Create 
     method:     post
       url:      /user
       payload:   TBD


 b. User  List all
     method:     get
       url:      /user
       payload:   querystring

 c. User Detail 
     method:     get
       url:      /user/:id
       payload:   TBD

 d. User UPdate
     method:     put/patch
       url:      /user/:id
       payload:   TBD

 e. User Delete 
     method:     Delete
       url:      /user/:id
       payload:  not required


- user
- auth
- banner
      a. Create Banner:-
            -> /banner, post method  => payload: title, status, link, image:
            -> response: {result:<content>, message:"Banner Created",meta:null}
      b.  List All Banner :-
             -> /banner, get method => payload: not required
             ->  response: {result: [{_id:"", title:"", link:"",image:""},{}], message: "All Banner List", meta: null}
      c. Detail of a Banner:-

                    -> /banner/:id, get method => payload: not required
             ->  response: {result: {_id:<Id>, title:"", link:"",image:""}, message: "Banner Detail", meta: null}
        
          c. Edit Banner :-

                    -> /banner/:id, get method => payload: <same as of create>
             ->  response: {result: {_id:<Id>,<response should be payload>}, message: "Banner Update", meta: null}

            d. Delete Banner:-
                 -> /banner/:id, delete method => payload:N/A
                 -> response: {result: null, message:"Banner Deleted", meta:null}


- product
- category
- brand
- order


## file/modular structure:-
/src 
    /config
      => all the setting for project
    /router
       => linked (controller call pass)
    / modules
        /user
           - user.controller.js
           - user.module.js
           - user.roouter.js
           - user.service.js
           - user.middleware.js