
# DMR-Lookup
A simple tool to lookup cars on the danish DMR website.

## Installation
```bash
npm install -g dmr-lookup
```

## Example
```bash
dmr-lookup SM33733
```
Outputs:
```
Mærke/Model:          LANCIA, THEMA, 3,0 V 6
Motor:                Benzin
Registreringsnummer:  SM33733
Stelnummer:           ZLA83400000322962
Art:                  Personbil
Første registrering:  30.6.1993
Status:               Afmeldt (har fået fjernet en gyldig registrering)
```

Use `--raw` to view full raw JSON response.