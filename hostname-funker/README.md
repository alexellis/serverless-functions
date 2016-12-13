# helloworldintent-funker
A sample funker function for the space agency skill.

Use this with [funker-dispatch](https://github.com/alexellis/funker-dispatch)

Usage:
======

```
git clone https://github.com/alexellis/helloworldintent-funker
cd helloworldintent-funker
git clone https://github.com/alexellis/funker-node

docker build -t helloworldintent .

docker network create --name funker --attachable
docker service create --name HelloIntent --network funker helloworldintent
```
