#!/bin/bash

docker build -f Dockerfile.armhf -t alexellis2/commitfetch-funker:arm . ; docker push alexellis2/commitfetch-funker:arm; docker service rm CommitFetch; docker service create --name CommitFetch --network funker alexellis2/commitfetch-funker:arm

