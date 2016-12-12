#!/bin/bash

docker build -t commitfetch . ; docker service rm CommitFetch; docker service create --name CommitFetch --network funker commitfetch

