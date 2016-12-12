# helloworldintent-funker
A sample funker function for the space agency skill.

Use this with [funker-dispatch](https://github.com/alexellis/funker-dispatch)

This function goes off to [http://api.open-notify.org/astros.json](http://api.open-notify.org/astros.json) to find how many people are currently in space, then puts together an utterance for Alexa to speak out.

After each request the container is recycled, but if you want to increase performance checkout the stateful branch with `git checkout stateful`. This dramatically increases the performance/output by using the `async` Node.js library to keep a perpetual loop going.

x86_64 Usage:
======

```
git clone https://github.com/alexellis/helloworldintent-funker
cd helloworldintent-funker
git clone https://github.com/alexellis/funker-node

docker build -t helloworldintent .

docker service create --name HelloIntent --network funker helloworldintent
```

Usage for ARM:
======

Same as above, but use the alternative Dockerfile:

```
docker build -t helloworldintent . -f Dockerfile.armhf
```

