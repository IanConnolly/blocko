blocko
=============

for when a RT was an endorsement, block everybody who RT'd a tweet


## Usage

```npm install -g blocko```

Create a twitter application and generate an access key.

Stick your API + access keys in /usr/local/share/npm/lib/node_modules/blocko/config.json

run

```blocko "<tweet-url>""```

or

```blocko id="<tweet-id>""```

(warning, will only block the first for the moment)
