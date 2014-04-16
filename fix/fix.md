#Are you getting this error?
[![Screen](https://raw.github.com/the-ben-waters/gmuwebdevtut/master/assets/permissions_error.png)](https://raw.github.com/the-ben-waters/gmuwebdevtut/master/assets/permissions_error.png)

**This is how to fix it**  

- First, make sure you have copied over local.cshrc, local.profile, and local.login from the prereqs page into your home directory  
- Second, type in the following code: 
        cd ~/    
        chmod -R 755 public_html/*   

Now it should work!
