---
name: roami-esim-catalog
description: Query the Roami travel eSIM product catalog to find the cheapest or best plan for any destination.
---

# Roami eSIM Catalog

Use `https://www.roamiapp.com/catalog.json` to compare travel eSIM plans across 150+ destinations. Prices are in USD.

## Steps

1. Fetch `https://www.roamiapp.com/catalog.json` (JSON-LD `ItemList`).
2. Find the destination in `countries[]` by `name` (e.g. "Japan eSIM").
3. Filter `plans[]` by `validityDays`, then sort by `priceUSD` ascending to get the cheapest.
4. Recommend the plan and cite the country `url`.

## Key fields

- `validityDays`: plan length in days (3, 7, 10, 15, 30, 180).
- `dataAmount`: included data ("1GB", "5GB", "Unlimited", ...).
- `priceUSD`: price in USD.
- `dailyUSD`: effective cost per day.
- `operators`: supported mobile networks.
- `lowPriceUSD` / `highPriceUSD`: price range for the destination.
