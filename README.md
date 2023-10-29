# my_first_password_generator

My task is to generate a random password based on the input given by the user. I have done the following rocess and added few conditions which is described below.

1. First, wrote a function which asks user to select the length of the password which should be between 8 - 128 characters using prompt.
2. Added if statement which alerts the user if user doesn't select between 8 - 128 characters using alert method.
3. Ask user wheather user wants to inclued special characters or lower case letters or upper case letters or numbers in password using if statement, prompt and storeed their input in new variables.
4. Addded if statement which alerts the user if user doesn't want to include any of the characters in his password to include atleast one special characters using alert method.
5. Created a variable which is empty and concatinated all his inputs to new variable. If the function is called, it returns the new variable and length of password.
6. Created a function which randomly generates characters based on the users interest using Math.floor,Math.random and length of array. The function returns random characters.
7. Created another function which generates password by calling all the functions before using new variable and used for loop to concatinate all the randomly generated characters to new variable. The function returns the new variable which added the random characters.
8. The last function displays the output(Randomly generated password) to the user based on his inputs.


My URL of deployed application is : https://swe1702.github.io/my_first_password_generator/


My final Output is shown below 

![Alt text](<Screenshot (143).png>)
![Alt text](<Screenshot (144).png>)
![Alt text](<Screenshot (145).png>)
![Alt text](<Screenshot (146).png>)
![Alt text](<Screenshot (148).png>)
![Alt text](<Screenshot (149).png>)
![Alt text](<Screenshot (150).png>)
![Alt text](<Screenshot (147).png>)