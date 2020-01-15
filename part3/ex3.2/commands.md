```
docker build -t yle-dl .
docker run --rm -v $(pwd)/output:/output yle-dl http://... 
# I downloaded https://areena.yle.fi/1-3005689
```
