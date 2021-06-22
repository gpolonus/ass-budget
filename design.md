# ASS BUDGET

takes in data from vibrant, citi, paypal, and amazon in order to give a good idea of what the shit is going on with our finances

## Questions:

on a day-to-day basis what are the numbers?

What are our payments? Which ones are coming up? Where do they come from and where do they go?

Do we have enough money for certain purchases?

Do we have enough money for new payments?

## Things I want this to do:

Show charts of what is going to happen to my money

Take data from money data sources and parse that we can use the data

## Future things this can do:

Use puppeteer to go get the data for me

Move to a bank that works with plaid so I can automate the data fetching

## What information does it need?

To find out how we are going to be doing?
- recurring inputs and outputs
  - regular amount flows
- how much money is in the account right now
- todays date
- credit card amount balances (citi and amazon)
  - variable amount flows

To find out how've done in the past?
- up to datetransaction data from the sources

