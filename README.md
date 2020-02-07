# Back-End
Back-End App

*Endpoints*

https://chore-tracker-build.herokuapp.com

*NOTE*
All this is first draft. If you're finding that it's annoying to require certain fields, just let me know and I'll change it!

*Authorization endpoints:*

*Parent/Main User*

To register: https://chore-tracker-build.herokuapp.com/api/auth/register

To login: https://chore-tracker-build.herokuapp.com/api/auth/login

*Users MUST have*

'username',

'password',

'email'

*Child User*

To register: https://chore-tracker-build.herokuapp.com/api/auth/register/child

To login: https://chore-tracker-build.herokuapp.com/api/auth/login/child

*Child users MUST have*

'username'

'password',

but also have the fields,

'points' (integer)

'cleanStreak' (boolean default false)

To retrieve a list of all users: https://chore-tracker-build.herokuapp.com/api/user

*User CRUD*

GET User: https://chore-tracker-build.herokuapp.com/api/user

*GET User with all Children:* https://chore-tracker-build.herokuapp.com/api/user/:id

*Child CRUD*

GET Child Users: https://chore-tracker-build.herokuapp.com/api/child

POST Child User: https://chore-tracker-build.herokuapp.com/api/child

PUT Child User: https://chore-tracker-build.herokuapp.com/api/child/:id

DELETE Child User: https://chore-tracker-build.herokuapp.com/api/child/:id

*Chore CRUD*

GET Chores: https://chore-tracker-build.herokuapp.com/api/chores

POST Chores: https://chore-tracker-build.herokuapp.com/api/chores

PUT Chores: https://chore-tracker-build.herokuapp.com/api/chores/:id

DELETE Chores: https://chore-tracker-build.herokuapp.com/api/chores/:id


*GET Chores on Specific Child:* https://chore-tracker-build.herokuapp.com/api/child/:id

*Chores MUST have*

'child_id' (integer)
'choreName'
'description'
'points' (integer)
'dueDate' (date - can be changed to string for ease)
'completed' (boolean default false)

but also have the fields

'bonusPoints' (integer)
'picture'

There's also a parent_child table that contains a 'parent_id' and 'child_id' to connect the data.
