
call(), apply(), and bind() are methods used to control the value of this when calling a function.

The main difference is how and when the function executes.

call()  → executes immediately
apply() → executes immediately
bind()  → returns a new function


Note:
apply() is very similar to call().
The key difference is how arguments are supplied.

bind()

bind() also allows you to set this, but it doesn't execute the function immediately.

Instead, it returns a new function.

Main Difference

This is the most important interview table:

Method	Executes immediately?	Arguments
call()	✅ Yes	Individual arguments
apply()	✅ Yes	Array
bind()	❌ No	Individual arguments
bind()	Returns a new function	


Execution Flow
                Function
                    |
          +---------+---------+
          |         |         |
        call()    apply()    bind()
          |         |         |
          ↓         ↓         ↓
      Execute    Execute    Return new
      immediately immediately function
          |         |         |
          ↓         ↓         ↓
      Individual  Array     Execute later
      arguments   arguments

