blocko
=============

because sometimes a RT really was an endorsement. 


## Usage

```npm install -g blocko```

Create a twitter application and generate an access key.

Stick your API + access keys in $where_npm_lives/lib/node_modules/blocko/config.json

run

```blocko "<tweet-url>"```

or

```blocko id="<tweet-id>"```

(warning, will only block the latest 100 due to limitations of the Twitter API)
