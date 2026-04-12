---
title: 'Flight RT Course notes'
date: 2025-07-01
slug: "flight-rt-course-notes"
categories:
  - Flight Lessons
tags:
  - AI-Generated-Content
description: >
  This page contains the notes I wrote down while following the Radio-telephony VFR course.  I have completed the VFR Radio Telephony rating on November 14 in 2025.
---

{{% alert title="Exam passed on November 14 2025." %}} For a live overview of my flight lessons, visit: <https://flighttools.justinverstijnen.nl/flightlessontracker>

This page can contain a collection of personal notes, steps to remember, finished and unfinished content. Please excuse brevity.

Do not use specific information given like fuel flow, landing/take-off distances for your flights. Always refer to the POH of your exact plane for flight preparation. My information is just for references that I used. {{% /alert %}}

---

## Module 1: Introduction to Radio Technology

In aviation, we communicate by radio technology. A plane and a ground station both use radio's to communicate with each other, so an aircraft knows how to fly a route and the tower can communicate with the pilots to give them clearance and such.

The main language in radio technology is English, but is no default language. In countries such as France, it can happen that the tower starts with French and then having to ask for English. Before you can achieve any pilot license, you first need to achieve a Language Proficiency Endorsement (LPE). Here you get a score from 1 to 6. You must score a 4 or higher to pass.

Communication in general is very important. How often you come across events in real-life where two people didn't know things of each other, forgot things or misinterpreted sayings different as an other person. In aviation, this can make a difference in life or death, so good communication and following the guidelines is very, very important.

An example of where communication gone fully wrong was the Tenerife 1977 disaster, where there were much more factors btw, but good communication could have prevented it from happening, it was the last factor.

https://www.youtube.com/watch?v=2d9B9RN5quA

### Frequencies and Radio explained

Sound moves with a speed of 330 meter per second, which is around 1188 km/u and are vibrations, which can be seen as waves. The length of the soundwave is equal to the tone-height (in Hz) and the height of the soundwave is equal to the volume (amplitude).

Waves mean frequency, which we will pronounce in waves per second, or simply Hertz (Hz). We can calculate the speed of soundwaves with this formula:

Wavelength x Frequency is Speed (G x F = V)

Mostly, radiowaves will make its way with the speed of light, which is aroung 300.000.000 meters per second.

This way we can also calculate the other way around, if we don't know the wavelength:

Speed / Frequency = Wavelength

Because radio waves are not receivable from anywhere, just like a flashlight will stopped being visible, we can calculate the maximum distance of our radio waves with this formula:

1,2 x (**√**altitude+**√**antennaheight) =

For example, we are flying at 15.300 feet and our antenna is at 247ft height:

*1,2 x (**√**15300+**√**247) = 167,29 nautical mile (NM) (309 km)*

So if we are within a 167 nautical mile circle of the ground antenna, we could have a connection with it. We can also use this formula to calculate the distance to another plane. But be aware, we are talking about the maximum distance, which means all variables must be perfect. In practice, the distance can be a lot less.

Aviation radio frequencies are between 118 MHz and 136.975 MHz. The range from 108 to 118 are reserved for VOR navigational beacons. When calling out radio frequencies, we will always use 4 or 6 digits, and callout "decimal" for the dot.

- 118.750

- 118.1

Radio's in an plane sometimes have a "squelch" button, which filters aircraft engine sound away. But be aware not to use too much as this will filter any sound away.

Radio failures: put transponder on 7600, so every air trafffic controller knows you are not reachable. By having your transponder on ALT will popup the aircraft on the ATC screens. We also have 3 extra special transponder codes:

- 7000: Normal VFR flight
- 7500: Hi-jacked flight
- 7700: Emergency (7 -> going to h

|  |  |  |
| --- | --- | --- |
| **Squawk code** | **Meaning** | **How to remember** |
| 7000 | VFR | - |
| 7500 | Hijacking | Five, man with a knife |
| 7600 | Radio miscommunication | Six, radio to fix |
| 7700 | Emergency | Seven, going to heaven |

Every controlled airport has some radio failure procedures published which must be followed to minimize problems for yourself and other aircraft. In case of your receiver is broken, but we can send messages, we will always use the phrase TRANSMITTING BLIND DUE TO RECEIVER FAILURE -> Add your message.

If receiver doesn't work, you can test the sender of your plane by pressing the transmit button. If you hear side-tones like a distant beep or buzzer, we can highly assume transmitting messages will still work.

Also to remember: speak in around 100 words per minute and Wait around 10 seconds between every radio call.

### 25KHz and 8.33 KHz channel separation

Previously we used 25KHz channel separation in aviation. However as more frequencies and radios are coming, the frequencies kept depleting. That's why we use 8.33 KHz separation today. This makes it possible to use frequencies like 121.000, 121.005, 121.010 instead of 121.000, 121.025, 121.050.

Under the hood, 121.005 is 121.00833 but we refer to them as channels more likely as frequencies but we call them frequencies to make communication more easy.

---

## Module 2: Message categories and Priority

In radio telephony we have multiple different categories of messages which we can hear and transmit to ATC. They are here in order of priority:

1. Distress calls
2. Urgency calls
3. Direction finding
4. Flight Safety messages
5. Meterological messages
6. Flight regularity messages

Some examples of these messages are:

|  |  |
| --- | --- |
| **Type of message** | **Example message** |
| Distress call | Mayday mayday mayday, loss of all flight controls (or engines) |
| Urgency calls | Panpan Panpan Panpan, Running out of fuel, request to land immediately |
| Direction finding | Request radio vector/magnetic bearing/heading to airport |
| Flight Safety | Clearances, regular flight communication |
| Meterological | Weather-related messages |
| Flight regularity | Company-origin messages |

### Distress Message

Distress calls are the most urgent calls possible and mean that direct action is needed. ICAO says about this: *A situation with great danger where immediate assistance is needed.*

For example, a plane has problems with engine or flight controls and want immediate clearance to land the plane if possible. When putting out a distress call, there is a specific frequency available that all ground stations across the world listen to which is 121.500 MHz. This is the emergency frequency.

A good distress call looks like this:

- Mayday (preferrable 3 times)
- Specific station or all stations
- Callsign of the plane (registration number/flight number)
- Cause of the problem
- Pilot's wishes
- Position relative to a station, altitude and direction
- Other information that helps identifying the problem

### Urgency Messages

A urgency call is a type of call which has urgency but no immediate danger like the distress call but still needs priority. This is where the safety of a plane or a single passenger is compromised without direct problems to get a plane on the runway.

A good urgency call looks like this:

- Pan Pan (preferrably 3 times)
- Specific station or all stations
- Callsign of the plane (registration number/flight number)
- Cause of the problem
- Pilot's wishes
- Position relative to a station, altitude and direction
- Other information that helps identifying the problem

Panpan calls can be upgraded to Mayday calls if needed and the other way around, but be aware not to change too often.

### Direction Finding messages

These messages are related to determine a direction to an airport. In the past, this sometimes was a problem but these days with Radar, GPS and mobile apps, this mostly don't happen anymore.

In the past was a method transmitting a signal to a plane physically to reach the VOR antenna was a thing.

### Flight Safety Messages

Most common messages are the Flight Safety Messages. These consists of landing/taxi/take-off clearances, ATIS information, plane position report and airport information.

### Meteorological Messages

Meteorological messages are messages purely about the weather and forecast. This can be a request to deviate from a certain heading to avoid weather and messages about forecasted turbulence and thermal waves with sunny weather.

### Flight regularity messages

Least priority messages, mostly from company to pilot to inform about next flights schedules or maintenance. Some messages are so low priority that they can wait till the plane has landed, so this category has the least priority.

### Time in aviation

In aviation, we can be in 3 other countries within an hour, all with their own timezones. In aviation, we have the UTC time, which is the median timezone line that spans over the United Kingdom, Portugal etc. UTC is an abbreviation of Coordinated Universal Time. Why this doesn't match the 3 letters:

- In English, it would have been CUT (Coordinated Universal Time).
- In French, it would have been TUC (Temps Universel Coordonné).

To avoid favoring one language over the other, international organizations in the 1960s agreed on the neutral abbreviation UTC. Thanks to France for this :)

We calculate from there with + or - hours. In the Amsterdam timezone, we have UTC +1 in the winter months and UTC +2 in the summer months.

---

## Module 3: Altitude Meter Procedures

The altitude incidator is a unmissable instrument in aviation for both the pilot and ATC. The pilot must know at all times that he will fly at a safe altitude above the ground, terrain buildings or windmills and the ATC will use height-seperation + location to avoid collisions.

To calculate altitude, planes use a altimeter that measures static pressure which works like a barometer and measures air pressure. Because the weather can change from time to time and the air pressure will change with it, we sometimes get a QNH setting from ATC which we must set. Then we have the corrected and calibrated altitude setting.

We have various types of air pressure:

- QFE: Pressure on ground level
  - We will use this only with taxi, take-off and landing as we then must know our height relative to the ground
- QNH: Pressure on sea level
  - We will use this mostly on over-land flights
- Flight Level: based on 1013,25 hPa and rounded to 1000 feet

These terms all mean somethin different:

|  |  |
| --- | --- |
| **Type of altitude calculation** | **Relative to** |
| Flight Level | 1013,25 hPa |
| Altitude | Weather station/METAR QNH (current air pressure) |
| Height | QFH/Ground Level |

---

## Module 4: Meteorological Information

All things meteorological has something to do with the weather. The weather can change at any time and can be unpredictable sometimes. This is a risk we have to manage properly in aviation.

### METAR

Every airport with a weather station has a weather report, which we call a METAR, every 30 minutes or 60 minutes. This depends on the size of the airport. In this report, the following information is published in this order:

- Type of report (METAR/SPECI)
- Which airport/city/area
- Time of measurement (In UTC)
- Visibility in meters (0 - 9999 where 9999 means "more than 10 kilometers")
- Runway Visual Range (RVR) in case of fog, means how much of the runway you will see when on the runway
- Current weather
- Amount of clouds and weather type
- Temperature and dew point
  - Temperature in RT is always given in Celcius, except being mentioned
- Local QNH (sometimes QFE)
- METAR version (Sierra/Zulu/Quebec)
- Other relevant information

Because the weather can change within an hour, sometimes a SPECI report is published. This is a in-between report that states the differences between the already known report and the changed situation. Types of weather that can cause a SPECI report:

- Fast changing wind/speed
- Major visibility decrease
- Thunderstorms
- Snow
- Fog
- Runway state change, ex. from dry to contaminated

### Wind Speed and direction

The speed of the wind and direction is something that is always reported in the METAR. This is reported in this convention:

Wind 240 degrees 15 knots

The degrees is the direction the wind comes from which is always pronounced in 3 digits and rounded to every 10 degrees and the speed in knots. Sometimes, there is a gust added, which means that the speed can at max reach that speed.

Also sometimes in the METAR, there is a variance added: 200V280 means that the wind is mostly coming from 240 degrees, but can be variable from 200 to 280 degrees.

### Visibility

The visibility will be calculated by the weather radar and always reports the visibility in meters.

- Under 5 kilometers, the visibility is reported for every 100 meter
  - Example: 4700 meters
- Above 5 kilometers, the visibility is reported for every kilometer
  - Example: 7 kilometers (while it may be actually 6900 meters)

When the visibility is above 10 kilometers, there are no clouds below 5000 feet (1500 meter) and no cumulonimbus, towering cumulus or significant weather is forming we have a weather condition called: **CAVOK**. This means Ceiling and Visibility OK.

When there is fog that limits our visibility under 1000 meters, then we have "Fog". Between 1000 and 5000 meters, we call it "Brume".

### Weather types

For Precipitation (neerslag in Dutch), different abbreviations are being used:

- Drizzle: DZ
- Rain: RA
- Snow: SN
- Hail: GR
- Small hail: GS

For clouds and types, we use these abbreviations/types and we categorize them in "okta". This means that the sky is seperated into 8 equal size parts, and the more cloud coverage, the more okta's are filled.

- **CLR:** Clear skies: 0 okta
- **FEW:** Few clouds, almost a complete clear sky 1 or 2 okta
- **SCT:** Scattered clouds, half overcast, 3 or 4 okta
- **BKN:** Broken clouds, 5, 6 or 7 okta
- **OVC:** Overcast, completely clouded, 8 okta's (maximum amount)

Sometimes, a VER VIS (Vertical Visibility) is given, mostly in conditions with multiple cloud layers.

### How to get Weather reports?

Weather reports can be received in various different ways. The most important ways are:

- Through ATC ATIS information system
- VOLMET
- Website on phone or tablet

A weather report is different for every airport with a weather radar. If you have an airport without weather radar, pick some adjecient airports. You can ask the airport itself by requesting it in this way:

- C/S request departure information
- C/S request arrival information

We also have 3 different meteorological information for certain types of aircraft:

- VOLMET: In flight meteorological information
- AIRMET: Light plane warnings under flight level 100
- SIGMET: Information about unreported significant weather which can cause turbulence, ice or rain

---

## Module 5: Definitions and Abbreviations

In this module, we will look into different definitions and abbreviations that we mostly use in aviation. This will be mostly a list of the definitions and shortcodes and the meaning + the use of them.

- **Aeronautical Mobile Service:** Service between ground stations and planes where emergency services are part of
  - Aeronautical station: A ground station in the Aeronautical Mobile Service.
  - Aircraft station: A mobile station in the form of an airplane
- **Air-ground Communication:** Two-way communication between an aircraft and the ground
- **Air-to-Ground communication:** One-way communication from aircraft to ground
- **Blind transmisson:** A transmission done from station one to another without possible two-way communication. The sender assumes the receiver can actually hear this transmission
- **Broadcast:** A broadcast with information for multiple stations which is mostly one-way
- **Simplex:** A method where communication is only possible one-way at a time
- **Radio Direction Finding:** Radio positioning system which uses the receiving radio frequency waves with the goal to determine the current heading (like VOR)
- **True radio bearing:** The angle between the assumed between the incoming radio waves and the true north (360/0 degrees).
- **Magnetic radio bearing:** The angle between the assumed direction of a radio transmission and the magnetic north.
- **Radio direction finding station:** A radio positioning station to determine the direction with radio waves.

Now we have some shortcodes to learn:

- AIS: Aeronautical Information Service
- AFIS: Aerodrome Flight Information Service
- AFTN: Aeronautical Fixed Telecommunications Network
- ALT: Altitude
- ATC: Air Traffic Control
- ATIS: Automatic Terminal Information Service
- ATZ: Aerodrome Traffic Zone
- CTR: Control Zone
- EAT: Expected Approach Time
- EET: Estimated Elapsed Time
- ETA: Estimated Time of Arrival
- FL: Flight Level (based on 1013.25 hPa / 29.92 inHg)
- FIR: Flight Information Region
- FMC: Frequency Monitoring Code (SSR)
- IFR: Instrumt Flight Rules
- IMC: Instrument Meteorological Conditions
- kHz: Kilo hertz (1000 Hz)
- MHz: Mega hertz (1.000.000 Hz)
- RMZ: Radio Mandatory Zone
- RPAS: Remotely Piloted Aircraft System (drones)
- SAR: Search and Rescue
- SSR: Secondary Surveillance Radar
- TMA: Terminal Control Zone
- TMZ: Transponder Mandatory Zone
- VDF: VHF Direction Finding station
- VFR: Visual Flight Rules
- VHF: Very High Frequency
- VMC: Visual Meteorological Conditions

Phew, that was all.

---

## Module 6: Last general knowledge before practicing

Before we dive into some general practices, we want to prepare you by stating some guidelines of the lines you are about to learn. You must know these before practicing.

### Guidelines for transmitting messages

1. Put your microphone close to your mouth to be understandable and to filter out the engine noise.
   - You could ask your co-pilot if you are clearly hearable
2. Use a normal conversation tone and speak clear
3. Use a speaking speed of around 100 words per minute. If your message must be written down, speak more slowly
4. Keep your speaking volume the same for the whole message
5. A short break after numbers to remind them better
6. Avoid "eh" or other unwanted sentence breaks. Finish your sentence as soon as possible
7. Press the transmit button, speak and then end pressing the transmit button

If you have contact with a ground station, you are required to hear the frequency out. The ATC will determine the order of contact to multiple planes (if applicable).

### Frequency hand-overs

Sometimes, an ATC will hand-over the plane to a different contact center, and will hand-over you to that ground station. This mostly happens if you cross the country where there are multiple ground station areas.

A pilot will be handed over by ATC with the word "contact", which is a signal word and will then say the frequency the pilot must connect to. An example is:

*PH-JSV, contact Amsterdam Tower on 118 (decimal) 705*

This must be read back to ATC and after transmitting the sentence, change the radio to 118.705.

When the pilot itself changes frequency, this has to be transmitted to ATC. An example of this transmit message is:

*PH-JSV, approaching Rotterdam CTR, leaving your frequency.*

### Readback of messages done by ATC

To verify that poth the pilots and ATC are on the same page, we do readbacks in aviation. It works like this:

1. ATC transmit a certain message to a pilot (radio frequency, heading, action, cleared for landing runway XX)
2. Pilot hears this and readbacks this complete message (or a summarized version)
3. Both ATC and pilot could then be corrected if readback is incorrect

Only reacting "roger" isnt enough.

Some general guidelines about readbacks:

1. Important information must always be readbacked, like frequencies, runways, heading but the readback may be summarized:
   - ATC: JSV, contact Schiphol Tower on 119.230
   - Aircraft: 119.230 JSV
2. Clearance and instructions must always be clearly confirmed
   - ATC: JSV, cross RWY 22, report vacated
   - Aircraft: cross runway 22, roger, JSV
3. Information which must be included if summarized:
   - Everything about runways
   - Headings
   - Altitude and speed
   - Transition level
   - Altimeter setting (QNH)
   - Transponder code (squawk)
   - QDM/QDR (Magnetic bearings)
   - Frequencies
4. Other information must not be readbacked, like wind or other information. Only when it's important.
5. A readback must always be ended with your flight-name (registration number, which may be shortened to only the second part or flightnumber on greater airports)
6. Conditional clearance must be readbacked
7. If clearance is readbacked incorrectly, ATC will say "negative" and give you the correct version
8. If pilot cannot succeed the given clearance, "Unable" must be at the start of the sentence and the rest of the message

### Use of Transponder

The transponder is a device in a plane which transmits altitude and other flight information to the Radar (SSR). This will allow for ATC to have your plan on the radar, including a 4 digit "squawk" code which is a plane identifier. If flying IFR, ATC will give every plane a unique number, and there are around 4.000 different codes made with 0 till 7.

Special transponder codes are:

- 7000: VFR (Europe -> 1200 in USA)
- 7500: Hijack
- 7600: Radio receival problems
- 7700: Emergency situations/forced landing

We also have some zones, also in the Netherlands where we are required to do something with transponder and/or radio:

- Transponder Mandatory Zone (TMZ): This is a zone where we are required (from 1200 ft in the Netherlands) to have a Transponder enabled
- Radio Mandatory Zone (RMZ): This is a zone where we also have to listen to the radio frequency.

A Transponder is often called the Secondary Surveillance Radar (SSR), and is next to the normal, passive radio based Primary radar, an addition for ATC and Flight Information Services to monitor all planes. Primary radar does not work with thunderstorms or particular types of clouds where Secondary Radar does. Using them both is the best combination.

Secondary radar works in the Ultra High Frequency range, at 1030 MHz and 1090 MHz.

---

## Module 7: Aviation alphabet and general sayings

The alphabet can be found here:

- *<https://en.wikipedia.org/wiki/NATO_phonetic_alphabet>*
- <https://www.learn-atc.com/wiki/icao-numbers>

We will call all letter and number one-by-one. Let's say our registration number is PH-JSV and we want to make a Radio call. We actually say:

- Papa - Hotel - Juliet - Sierra - Victor

We will do this for any collection of letters and numbers, except for these abbreviations:

|  |  |
| --- | --- |
| **Abbreviation** | **Definition** |
| ACC | Area Control (Center) |
| ATA | Actual Time of Arrival |
| ATC | Air Traffic Control |
| ATD | Actual Time of Departure |
| CB | Cumulonimbus |
| EET | Estimated Elapsed Time |
| ETA | Estimated Time of Arrival |
| ETD | Estimated Time of Departure |
| FIR | Flight Information Region |
| MSL | Mean Sea Level |
| QDM | Magnetic heading (wind excluded) |
| QFE | Altimeter pressure on ground (sea level + elevation) |
| QNH | Altimeter pressure calculation |
| SSR | Secondary Surveillance Radar (Transponder-radar) |
| TMA | Terminal control area |
| UTC | Coordinated Universal Time |
| VFR | Visual Flight Rules |
| VHF | Very High Frequency |
| VMC | Visual Meteorolocigal Conditions |
| VOR | VHF Omni directional beacon |

These are terms we often use, and both A/C and G/S's will know them. No spelling needed for those.

Now to communicate with other stations or aircraft we use some default phrases. These phrases must always contain one of these words which we could call "signal-words":

|  |  |  |
| --- | --- | --- |
| **Phrase** | **Meaning** | **Practice Example** |
| Acknowledge | Please let me know if message is received and understood | G/S: ... Acknowledge you received last transmission |
| Affirm | Yes | G/S: ... Confirm you are at holding point for runway 22  A/C: Affirm |
| Approved | Your action is approved (no clearance) | A/C: ... Request startup  G/S: ... Startup approved |
| Break | A separator between multiple unrelated messages for the same receiver | G/S: ... Cleared for landing, runway XX BREAK ... Report runway vacated  A/C: ... 2 minutes out of holding point for runway 22 |
| Break Break | A separator between messages for different receivers | A/C: ... Cleared for landing, runway XX BREAK BREAK ... Behind the landing aircraft, line up and wait behind |
| Cancel | Cancelling the given clearance | G/S: ... Cancel last clearance |
| Check | Check a system or procedure | G/S: ... Check heading  A/C: Heading checked |
| Cleared | You are cleared to do something you need clearance for | G/S: ... Cleared for take-off runway 22  A/C: Cleared for take-off, runway 22, ... |
| Confirm | Did I receive the last transmission correctly? | G/S: Confirm you are at holding point runway 22  A/C: Correct |
| Contact | Switch frequency to... | G/S: ... Contact Amsterdam tower on 118.250  A/C: 118.250, ... |
| Correct | That is correct | G/S: Confirm you are at holding point runway 22  A/C: Correct |
| Correction | An error in the message | A/C: ... 2 minutes, eeh, correction, 3 minutes out of overhead Tango |
| Disregard | Decline this message, never transmitted | A/C: ... 2 minutes, eeh, disregard |
| How do you read | Question for readability level | A/C: ... How do you read?  G/S: ... Readability 4 |
| I say again | Repeat the message if not read back correctly | \* after a failed transmission  G/S: I say again, taxi and hold short at runway 22 |
| Maintain | Maintain an altitude or heading | G/S: ... Maintain altitude 5000 ft and Heading 069  A/C: Maintain altitude 5000 ft, heading 069 ... |
| Monitor | Check a frequency but do not talk (ATIS) | G/S: ... Cleared for taxi, monitor ATIS at 121.705 for latest weather  A/C: Cleared for taxi, 121.705, ... |
| Negative | No | G/S: Confirm you are at holding point for runway 22?  A/C: Negative. |
| Over | End of my message and I expect reply | A/C: Request for landing, 17 miles south, over ... |
| Out | End of my message and don't expect reply | A/C: End of flight, out, ... |
| Read back | Repeat the message and therefore confirm you have heard it correctly | G/S: ... Cleared for landing, runway 22, read back  A/C: Cleared for landing, runway 22, ... |
| Recleared | Change in clearance and cleared for the new procedure | G/S: ... Recleared for landing, runway 35  A/C: Recleared for landing, runway 35, ... |
| Report | I want to know cloud ceiling, altitude, heading, traffic in sight | G/S: ... Report altitude  A/C: Altitude 1500 ft or Flight Level 70 |
| Request | I want to do the following | A/C: ... Request startup  G/S: ... Startup approved |
| Roger | I have received your message (when no readback is needed) | G/S: ... Wind 260 at 12  A/C: Roger ... |
| Say again | Can you repeat the whole message? | A/C: 2 eehh... minutes eeh.. out ehh.. Tango apprkjw%dbcif@$3jbcihc3...  G/S: ... Say again |
| Speak slower | Can you speak slower? | A/C: Request startup (fast)  G/S: Request to speak slower |
| Stand-by | Wait, I will come back to you | \* engine problems G/S: Request ETA  A/C: Stand-by |
| Unable | I cannot fullfill that request | G/S: Hold short at runway 22  A/C: Unable, traffic on taxiway |
| Wilco | I will do this in the near future | G/S: ... Cleared for landing, runway 22. Stay on the runway after landing  A/C: Wilco, after landing ... |
| Words twice | Every word transmitted must be said twice in case of radio jamming | G/S: Readability 1, words twice  A/C: Request request startup startup |

... = Callsign of the aircraft

### Units

Some of the units we don't shorten but speak fully. This is to reduce confusion about the units and Impertal/Metric system.

- **Distances:** Nautical miles
- **Short distances:** Metres
- **Altitude/elevation/heights:** Feet
- **Horizontal speeds:** Knots
- **Vertical speed:** Feet per minute (FPM)
- **Wind-direction:** Degrees
- **Altimeter settings:** Hectopascal
- **Temperature:** Degrees Celsius

---

## Module 8: Callsigns and general procedures

In aviation, we have different procedures to communicate to other stations. We define "station" as a building, plane or car with one or multiple people, listening actively to a radio frequency. A plane is a station but "Schiphol Ground"also is a station.

We call this communication the "Aeronautical Mobile Service" and contains the communication between a station and a aircraft.

Beause this communication is on a frequency, and we have limited airtime on that, communication is always "simplex". This means transmitting goes only one-way. You can not talk through a message, just like you can do on your phone. We call this "simplex". When calling on your phone where two-way traffic is possible, this is called "duplex". If you know some IT or computer stuff, you might know these terms.

We categorize this into 2 categories:

- **Air-to-ground (ATG)** = **simplex** (only from aircraft to ground)
- **Air-ground (AG)** = **duplex** (two-way, both from air to ground and ground to air)

Mind the seperating "to".

### Radio callsign for Ground Stations (G/S)

Every station, if it is a plane or a ground station, has a callsign. Every start of a conversation must start with this phrase.

- Location + Suffix

Examples can be:

- Schiphol Tower
- Teuge Radio
- Eelde Delivery
- Rotterdam Apporach

We have some default suffixes that are the same for most of the airports:

|  |  |  |
| --- | --- | --- |
| **Service** | **Purpose** | **Suffix name** |
| Area control | General/national area controller | Control |
| Approach control | Approach controller | Approach |
| Aerodrome control (TWR) | Local area controller | Tower |
| Radar | Radar area controller | Radar |
| Surface movement control | Taxi controller | Ground |
| Clearance delivery | Clearance controller | Delivery |
| Flight information | Flight information, weather + METAR | Information |
| Air-ground communication service | Aerodrome information | Radio |

### Radio callsign for Aircraft (A/C)

For a plane, the callsign would be:

- The plane's brand, type and registration number
  - Cessna 172, PH-JSV
- The international radio-name of the aviation company with the last 4 positions of the registration number
  - KLM HJSV
- The international radio-name of the aviation company with the flight number
  - KLM 1234
  - Ryanair 666
- A fictional callsign
  - "Speedbird" for British Airways Concorde
  - "Air Force One" for the Boeing VC-25A if the president of the USA is aboard

We will shorten the plane's registration number to the first position and the last 2 positions, but only when approved by ATC. They will inform you of which one to use.

If a plane's take-off weight is above 136 tons (136.000 kg and 300.000 lbs), then the term Heavy must be added to the callsign. For the Airbus A380, which weights about 500 tons for a full flight, we use the term Heavy. This is because those planes can add a lot of wake-turbulence in the vicinity. Especially for us flying a weak Cessna 172.

---

## Module 9: Making Radio contact

### Initial contact

We mean by "Initial contact", the first communication that we have with one of the Ground Station services. At initial contact, we will communicate to the ground station name followed with our callsign which will mostly be our full registration number:

- *Teuge Radio, PH-JSV*

We will wait for the ground station to respond to our message, as they can answer and process our message. They will respond with a message like:

- *PH-JSV (PSV), go ahead*

We will then transmit a message that clearly states the following:

|  |  |
| --- | --- |
| **Part** | **Practical saying** **example** |
| Who are we? | Cessna 172, PH-JSV, 2 POB (People on board) |
| Where are we? | In front of restaurant 5 miles north of Amsterdam 2 minutes out of "Sierra", 1500ft |
| What are we doing? | 1 hour local training flight VFR to Amsterdam VFR to Rotterdam |
| What do we want? | Request startup Request taxi Request for landing Request departure Request switching off |

Some extra information:

- ICAO alphabet: <https://en.wikipedia.org/wiki/NATO_phonetic_alphabet>
- When complying to a request, like stay on the runway after landing, use the following:
  - Roger (after landing) for immediate action
  - Wilco (after landing) for action in the near future (in a few minutes)
  - We may shorten the request to the first 2 words or the most important words

### Readability scale

To communicate how good we are being heard on the other side, we have a readability scale, from 1 to 5. This is a score where higher means better readability:

|  |  |  |
| --- | --- | --- |
| **Score** | **Description** | **How to remember** |
| 1 | Unreadable |  |
| 2 | Readable now and then | Now & Then - 2 words |
| 3 | Readable but with difficulty | Diff-i-cult - 3 syllables |
| 4 | Readable, but not perfect |  |
| 5 | Perfectly readable |  |

Read means being heard in this case.

When doing a radio check, the ATC will respond with readability 1 to 5 depending on how readable you are. Sometimes, ATC asks if they are also readable to you. You can respond with this scale as well:

- *Papa hotel juliet sierra victor, readability 5*

The best tip in practice is to first prepare your message, maybe write it out on your note-block and read it for yourself. Then transmit the message on the "critical" frequency. Remember, transmitting means airtime on the frequency.

If a station doesn't know for sure that it was being called, no answer must be given. Carefully wait till a new call is being done. This is to keep the frequency empty from unnessesary communication.

If a station has confirmed that they are the one being called but not by who, first communicate this:

- *Station calling..., say again call sign*

### VFR-circuit

In VFR flights, we will fly a pre-determined circuit to land and take-off our aircraft. This is so that all aircraft will fly the same route to the runway. For controlled airports, this is mostly on 1000 ft or 1500 ft MSL. For green airports like Teuge or Texel, this is 700 ft Above Aerodrome Level (AAL). This is Elevation + 700 ft.

Always refer to the published procedures, as this published altitude is the leading factor.

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-8f0d2c84c6c0.png)

Here is an example of a left-hand circuit. This means the Downwind leg is at the left side of the landing runway. In a right-hand circuit, Downwind is at the right-side.

Back to the communication in a circuit. We have multiple mandatory call-out points:

- Downwind
  - C/S, cross in the middle, downwind, Full stop/touch and go
- Final
  - C/S, on final (inbound to land)

We can announce Base leg on the frequency if there are aircraft on the run-up area or holding short to anounce that we are inbound. This will hopefully make them alerted and waiting till entering the runway.

After making the initial radio contact like above, we must give the information block:

- Type of aircraft + persons on board (POB)
- Parking place
- VFR or IFR
- Destination ( + alternate)
- Which weather is received
- Request type/intention
- Callsign (C/S)

Two examples (2 & 9) of initial contact with Delivery which I had to work out for the training:

### Example 1

Papa - hotel - bravo - oscar - sierra
Radio check on one- two - one - decimal - niner - eight - zero (121.980 MHz)

- *Readability*

Piper Cherokee, 2 POB
In front of Hangar 5 Lima
VFR to Eelde, Alternate Teuge
Received weather is Bravo
Squawk VFR set, request for taxi
Papa - hotel - bravo - oscar - sierra (papa-oscar-sierra)

QNH xx Runway XX

### Example 2

Papa - hotel - tango - whiskey - romeo
Radio check on one-two-one-decimal-eight-three-zero (121.830 MHz)

- *Readability*

Cessna 172, 4 POB
Charlie-apron unable to receive ATIS
VFR to Teuge
Received weather is Whiskey
Squawk VFR set, request for taxi
Papa - hotel - tango - whiskey - romeo (papa-whiskey-romeo)

QNH xx Runway XX

We as aircraft then can respond with this message:

Roger, taxi approved
Runway 23, QNH 1017
Papa-whiskey-romeo

On military fields, the POB (persons on board) is required. Its not very strange to always include this in your message. This is caused by this accident: <https://en.wikipedia.org/wiki/1996_Belgian_Air_Force_Hercules_accident>

### Start-up clearance

On every controlled airport, we must first request for clearance before starting our engines. We call this the "start-up". After receiving clearance to start the engines, we can start them and then ask a clearance to taxi to the runway. On some bigger airports, the taxi instructions come from the Tower frequency. On Schiphol Airport, this is on the ground frequency.

A/C: C/S, request taxi

G/S: C/S, roger, contact Eelde Tower on 118.705

A/C: 118.705, C/S

Then we have to switch to the correct frequency, and start-again with the whole block of Initial contact because this is a new frequency and so new ground station. However, it is possible that you get the same department or even the same person, but this is by procedure.

### Taxi clearance

When receiving taxi clearance, you will be directed to multiple taxiways, holding points (s) and taxiway exits. A taxi clearance for Eelde Airport can look like this:

- C/S, taxi to holding point S1 (Sierra one) runway 23 (two three), via taxiway G (Golf) and taxiway A (alpha)

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-7bcf7a3f26e3.png)

This relates to the green line on the picture above. At the holding point, we must wait till we get the clearance to cross the yellow line. The clearance must contain "cleared for take-off" or "cleared to cross runway XX". Otherwise, this line may never be crossed.

After you leave a runway, we transmit "Runway XX vacated". This means, we have left the runway. We don't need taxi clearance for leaving a runway but we need one to taxi from taxiway to parking.

### Some regularly used abbreviations

- Estimated Time of Arrival (ETA)
- Endurance
  - Fuel in hours (and minutes)
- Alternate
  - Alternate airport in case of bad weather or other discontinuities
- Rate of climb (ft/min)
  - Climb speed
- Rate of descent (ft/min)
  - Descent speed
- Reduce (speed/rate of descent/rate of climb)
- Expedite
  - Speed up
- Heading (without wind correction) QDM
- Track (with wind correction)
- Immediately
  - Do this now
- Orbit
  - Make a circle above a certain point over left or right
- 360 turn
- Hold over/Overhead
  - Wait at a certain point till further instructions
- Omit
  - Exclude something like position report

### Names of taxiways

All ways on an airport has names to make clear what turns to take and what ways to follow. This makes both the pilots and G/Ss clear how a plane must taxi from and to the runway.

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-9de94dc53c38.png)

All taxiways will be indicated next to the runway. The letters are always spelled completely like the ICAO alphabet:

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-b91cd1329f39.png)

Yellow signs means intersections, black signs mean current ways.

### Some extra ATC and F-Plan abbreviations

These are some extra ATC and Flight Plan preparation abbreviations and their definitions:

|  |  |
| --- | --- |
| **Abbreviation** | **Definition** |
| A/C | Aircraft |
| ALT | Altitude |
| C/S | Call sign |
| EET | Estimated Elapsed Time |
| END | Endurance |
| POB | People on Board |
| FOB | Fuel on Board |
| A/B | Airborne (on time X) |
| L/T | Landing (on time X) |
| TCK | Track (heading) |
| IAS | Indicated Airspeed |
| TAS | True airspeed (IAS + Wind) |

Then some extra generic abbreviations which ATC will use from time to time:

|  |  |
| --- | --- |
| **Abbreviation** | **Definition** |
| U/S | Unservicable |
| CTR | Control Zone |
| GND | Ground (station) |
| TWR | Tower |
| TFC | Traffic |
| TMA | Terminal Maneuvering Area |
| UFN | Until further notice |
| WIP | Work in progress |

---

## Module 10: VFR outbound flights

Because most flights in single engine planes are done using the Visual Flight Rules (VFR), we have some basic rules which must be followed. We are clearly different traffic than IFR flights, which will mostly be the big commercial planes like Boeings or Airbusses.

VFR flights will be seperated from those IFR flights on dutch airports. On Schiphol, there is one runway available for VFR flights, which is 04/22. The flight paths for VFR are mostly on the edge of the airport's control zone (CTR) to have physical seperation. For big airports like Schiphol, a "slot" must be reserverd due to the high traffic amount per hour. This is because on average, a plane lands and takes off every minute.

For VFR outbound/departing flights, we have the following guidelines:

1. A flight-plan must be submitted to the local area controller and clearance must be received from the controller
2. Within controlled airspace, two-way radio communication and active monitoring is required
3. All flights from and to airports and aerodromes must follow the VFR routes and published procedures
4. Routes and altitude may only be deviated with permission or from ATC's order
5. In Dutch CTR's like Schiphol, Beek, Eelde, Rotterdam and Eindhoven are IFR areas. These are marked on the VFR procedure map of the airport
6. VFR traffic on controlled airports must always get a clearance to startup the engines. This is called the start-up clearance

### Departing routes

When departing in VFR, we have multiple routes which can be followed. These are published by the airport itself. For Schiphol, we always use the Victor-departure (V-departure). This is called the Victor departure because the route leads to a town "Vinkeveen".

The route of schiphol has the following requirements:

- Maximum altitude of 1000ft MSL (maximum, so 500ft e.g. is allowed)
- After departing, the edge of the CTR must be reached within 4NM distance from the airport
- Checkpoint Bravo is a mandatory call-out location
- After leaving the CTR above checkpoint Victor, this must be called to ATC
- VFR 7000 and mode on ALT

### Uncontrolled airfields

On uncontrolled airfields we mostly have a specific frequency available for all planes to communicate. This will mostly the Radio Suffix, which has no ATC permissions. Also we announce to the Radio/aerodrome monitoring what we are doing and they will give us the required information. This information consists of:

- Wind direction and strength
- Threats in the vicinity or mind gliders/para's
- Other aviation activities in the area
- Taxi procedures

In VFR outbound flights we will communicate in this way to the Radio frequency:

**First doing a testing communication**

A/C: XXX Radio, Callsign
G/S: Callsign, go ahead

**Directly after the communication test, **At the apron, ready for taxiing****

A/C: Callsign, X POB, Pilot in command is XX, Parked at XX, 1 hour local training flight, Request aerodrome information for take-off
G/S: Callsign, In use, runway XX, Lefthand circuit, mind para's
A/C: Runway XX, roger the para's, Callsign

**At the holding short point for a runway, ready for departure**

A/C: Callsign, lining up runway XX
G/S: Callsign, lining up

**At 700 ft, and leaving the circuit area**

A/C: Callsign, leaving the circuit area
G/S: Callsign, leaving (have a great flight)

---

## Module 11: VFR Inbound flights

Now that we have processed everything we need to know about outbound flights, let's take a look into VFR inbound flights.

Before diving into every aspect of an inbound flights, let's take a look at the rules that apply:

1. The same rules as for [VFR outbound flights](#vfr-outbound-rules) apply
2. Long before inbound on the local ATC area, radio contact must be made with the ground station of the area controller
3. It is possible to receive a short version of the approach procedure, like a midrunway-baseleg instead of a threshold-baseleg. In the Netherlands, this is only possible on Runways 04 and 22 of Schiphol. Especially for a Cessna 172, this runway is more than long enough to land on. (2014 meter)

### Uncontrolled airfields

On uncontrolled airfields we mostly have a specific frequency available for all planes to communicate. This will mostly the Radio suffix. Also we announce to the Radio/aerodrome monitoring what we are doing and they will give us the required information. This information consists of:

- Wind direction and strength
- Threats in the vicinity or mind gliders/para's
- Other aviation activities in the area
- Taxi procedures

In VFR inbound flights we will communicate in this way to the Radio frequency:

**In the area but around 5 minutes to landing**

A/C: XXX Radio, Callsign
G/S: Callsign, go ahead (or direct information)

A/C: Callsign, back on your frequency, approaching \*point from the \*direction, 2 minutes inbound, request aerodrome information for landing
G/S: Callsign, in use runway XX, Righthand circuit (sometimes mind para's or gliders)

A/C: Runway 08, roger para's, callsign

**Overhead calling point**

A/C: XXX Radio, Callsign, overhead \*calling point
G/S: Sometimes you will get no response, or a short response like "Roger" or overhead

**Joining Downwind leg**

A/C: Callsign, Mid downwind for XX, full stop (or touch and go)
G/S: Sometimes you will get no response, or a short response like "Roger" or a complete readback

**Turning Base-leg (optional)**
(not required to call out, but for attention if traffic ready for take-off)

A/C: XXX Radio, Callsign, turning base-leg
G/S: Sometimes you will get no response, or a short response like "Roger"

**Turning final-leg**

A/C: XXX Radio, Callsign, turning final, full stop (or touch and go)
G/S: Sometimes you will get no response, or a short response like "Roger"

**Runway vacated**

A/C: XXX Radio, Callsign, runway vacated
G/S: Sometimes you will get no response, or a short response like "Roger"

---

## Module 12: Amsterdam Information and Dutch Mil Info

In this module we will dive deeper into the greatest Flight Information Centers of the Netherlands:

- Amsterdam Information: Mostly Amsterdam and Rotterdam and North sea
- Dutch Mil Info: The east part of the Netherlands

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-0b2b8fe576b0.png)

These frequencies are Flight Information Centers (FIC), and do provide information which can be really important for your flight. They don't do flight seperation but can warn you for potential other traffic or emergency situations.

However, contacting and listening these frequencies is not mandatory, but highly recommended

The FIC can provide extra information when contacting them, like:

- **Regional QNH:** Every aircraft in the FIC area get's the same QNH for the whole area to be on the same relative altitude
- Reporting other traffic, military practice operations or special events
- Asking information like no-fly zones or CTR crossing clearance for military fields

### Contacting Dutch Mil Info

We can join the Dutch Mill channel by dialing in the frequency 132.350 MHz.

A/C: Dutch Mil Info, Callsign
G/S: Callsign, go ahead

Now we have to report what we are doing exactly, who we are, where we headed etcetera:

A/C: Callsign, Cessna 172, X POB, VFR training flight (or dep/arr), our location, requesr Flight Information Service (Flight Info)
G/S: Callsign, QNH 1009 (and potentially some other information)

As we got a QNH which is mandatory to readback, we will do this:

A/C: QNH 1009, Callsign

### Leaving Dutch Mil Info

We can now leave this frequency as we want to land on an airfield, or we don't need the FIC anymore. They like you if you sign off like expected.

A/C: Callsign, location, approaching aerodrome, request frequency change to XXX
G/S: Callsign, frequency change approved (have a nice day)

Then we will respond:

A/C: Frequency change approved, Callsign (and we can add Goodbye or nice day if we are nice).

---

## Module 13: Crossing CTR's and Radio Direction Finding

In a country, we have multiple control zones (CTR). These are controlled zones of airports which controls the area around the airport such as traffic separation.

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-ff14de65daae.png)

This is an example of a CTR. The circle is a circle of 5 nautical meters (9,2km). In the circle, we have two rectangle which are the departure and arrival blocks.

When we have to cross a CTR, a clearance of the ATC is needed. This means we have to ask for clearance around 2 minutes prior to crossing. This can look like this:

A/C: Leeuwarden Tower, PH-JSV
G/S: PSV, Leeuwarden Tower

Then we will announce our intentions:

A/C: Cessna 172, X POB, VFR Texel to Eelde, 5 miles west of your CTR, request cross zone, cross straight from Franeker to Burgum, overhead the field at 2000ft, PSV
G/S: PSV, roger, cleared to cross Leeuwarden CTR at 1500ft, QNH 1017, straight from Franeker to Burgum, overhead the field

Now we got the clearance, we will read this back:

A/C: cleared to cross Leeuwarden CTR at 1500ft, QNH 1017, Franeker to Burgum, PSV

Then we have to announce the entering and exiting the CTR:

A/C: PSV, approaching Franeker, entering CTR at 1500ft
G/S: PSV, roger, squawk 7203
A/C: Squawk 7203, PSV

And then we will exit the CTR:

A/C: PSV, over Burgum, leaving CTR at 1500ft
G/S: PSV, roger, frequency change approved (goodday)
A/C: Frequency change approved, PSV, nice day

The route can be different, it can be a straight line or a angle. Mostly, the tower will direct you overhead because this is the safest route in terms of departing or arriving traffic. Also, they will assign you a specific altitude.

### Radio Direction finding

This part can sound a little fun in terms of Transponders, GPS, the Mobile period and Skydemon. But in previous years when a VFR pilot is lost, they could request a radio direction finding from ATC. They will do a test from which direction the radio signal of the plane is coming. Then they could give the plane a heading with a specific class:

- Class A accurate within ± 2°
- Class B accurate within ± 5°
- Class C accurate within ± l0°
- Class D accurate less than 10° (useless, as this can be up to 180°)

This might sound rediculous but was the normal way of doing in the 80s and 90s. These days, this will never happen in developed countries but we need to know this as some parts of the world doesnt have GPS/internet/mobile phones.

We can request this by:

A/C: QDM QDM, Rotterdam Tower PH-JSV, request QDM PH-JSV (We have to mention QDM and our callsign twice)
G/S: PH-JSV, Rotterdam Tower, QDM 050 Class B
A/C: QDM 050 Class B PH-JSV

This way we will know that we are ar a heading of 50 degrees of Rotterdam, which will be somewhere north-east. As the radio range can be up to 300 km, this is a tip but not a very obvious one.

And sometimes, we will be asked to count till 10 so we transmit, and the ground station can receive that signal to perform the QDM finding.

### Special clearances

Sometimes, we will get a special clearance. This can be to give way to a security car on the taxi way or other traffic or a request for the braking action on the runway.

If we are requested to get a clearance but with an limitation, like line up behind a landing plane, we will have to repeat this limitation twice:

G/S: PSV, behind the landing Cessna 172, cleared for take-off, behind
A/C: Behind the landing Cessna 172, behind, cleared for take-off

What also can happen, is that we get a special instruction to our take-off clearance. This could be to follow the runway heading (runway 24 is 240 degrees, or West-South-West/WSW).

G/S: PSV, runway 24, cleared for take-off, runway heading, until 1000ft, then left turn out
A/C: Cleared for take-off, runway 24, runway heading, 1000ft, then left out, PSV

We also could get a request to stop our take-off/about:

G/S: PSV, hold position, cancel, I say again, cancel take-off
A/C: Stopping, PSV (or repeat cancelling take-off)

Its possible to receive a clearance without flying the circuit (like at the beginning or end of the day to speed things up). We call this a "straight-in" approach.

G/S: PSV, make straight-in approach runway 24
A/C: Straight-in approach, PSV

## VFR Radar phraseology

In VFR flights, it could be possible that radar assistance is needed. This due to incoming overcast or bas visibility. The radar communication works with heading and degrees (absolute) or the clock system (relative) to point out other traffic to and ATC will use radar to identify your plane.

It can also be that we are separated by ATC:

G/S: PSV, turn left heading 050 for separation
A/C: left heading 050, PSV

We will first be asked what our magnetic heading is, because this defers from the true north. This is the heading what the middle compas shows:

![](https://sajvwebsiteblobstorage.blob.core.windows.net/flightblog/flight-rt-course-notes-4606/jv-media-4606-9c60cc0d318f.png)

---

## Other important notes (to be categorized in the modules)

- If heading for a required call-out point, like "Tango" or "Sierra", we must call-out this around 2 minutes before reaching
- The first time reaching out to ATC, the ATIS weather letter must be mentioned
- If almost on the runway without landing clearance, stay at 0,5 meters altitude above the runway and else a go-around is required
- The call-out of other aircraft making a full-stop or touch and go is no insurance they actually do
- A Long landing is a landing on around the second half of the runway
- A intersection take-off is a take-off on the second half of the runway
- VFR doesn't use the IFR waypoints around the world, but we can use them as reference point to ATC
- IFR waypoints are always 5 characters: <https://opennav.com/waypoint/NL/>

---

## Practice objectives

### Assessment 1 (page 113)

Spelling is correct

Phase 1: Signing on and getting clearance

Eelde Delivery, Papa Hotel Sierra Bravo Papa

Eelde Delivery, Papa Bravo Papa

- Piper Seneca
- 2 POB instead of one
- VFR to Rotterdam
- Request startup

118.705, Papa Bravo Papa

Eelde Tower, Papa Hotel Sierra Bravo Papa

Request taxi

Holding short Sierra 1 for runway 23, Papa Bravo Papa

Eelde Tower, Papa Bravo Papa, request departure

Behind the landing Boeing 747, line up and wait, behind

Cleared for take-off, runway 23, Papa Bravo Papa

Eelde Tower, Papa Bravo Papa, overhead Tango

Wilco report Victor, Papa Bravo Papa

Eelde Tower, Papa Bravo Papa, overhead Victor

Eelde Tower, request leaving your frequency for Dutch Mil

Frequency change approved, goodday, Papa Bravo Papa

Dutch Mil info, Papa Hotel Sierra Bravo Papa

Dutch Mil info, Papa Bravo Papa, overhead Assen, 1200 feet, VFR to Rotterdam, request flight information services

QNH 1023, Papa Bravo Papa

Traffic in sight, Papa Bravo Papa

Divert to heading 270 to avoid traffic, Papa Bravo Papa

Dutch Mil Info, Papa Bravo Papa, requesting flight plan change to Schiphol due to bad visibility

Frequency change approved, thank you, Papa Bravo Papa

Schiphol Tower, Papa Hotel Sierra Bravo Papa

Schiphol Tower, Papa Bravo Papa, Piper Seneca, 2POB, changed destination to Schiphol due to bad visibility, original destination Rotterdam, request for landing, full stop

Cleared to enter CTR, QNH 1002, Wilco Victor, Papa Bravo Papa

Schiphol Tower, Papa Bravo Papa, overhead Victor, 1000ft

Wilco report downwind, Papa Bravo Papa

Schiphol Tower, Papa Bravo Papa, joining downwind, 1000ft

Cleared to land runway 22, copied the wind, Papa Bravo Papa

Schiphol Tower, Papa Bravo Papa, runway 22 vacated via Golf 5

121.805, Papa Bravo Papa

Schiphol Ground, Papa Hotel, Sierra Bravo Papa, request taxi to parking

Taxi to Kilo apron via G5, taxiway Golf Kilo apron

Schiphol Ground, Papa Bravo Papa request switching off

Switching off, thank you, Papa Bravo Papa

### Assignment 2 and 3 done on MSFS

### Assignment 4

Spelling is correct

Beek Delivery, Papa Hotel Whiskey Alpha Alpha

Beek Delivery, Papa Hotel Whiskey Alpha Alpha, type is Cessna 172, 2 POB, VFR Beek to Schiphol, Request startup

Startup approved, Papa Alpha Alpha (or Startup at 25, Papa Alpha Alpha)

Beek Delivery, Papa Alpha Alpha, ready to taxi

119.480, Papa Alpha Alpha

Beek Tower, Papa Hotel, Whiskey Alpha Alpha

Beek Tower, Papa Alpha Alpha, ready to taxi

Taxi to and hold short Whiskey 4 for runway 03, Papa Alpha Alpha

Beek Tower, Papa Alpha Alpha, holding short Whiskey 4, ready for departure

Cleared for take-off runway 03, maintaining runway heading till 1300ft, wilco 1300ft

Beek Tower, Papa Alpha Alpha, maintaining 1300ft

Wilco Golf, Papa Alpha Alpha

Beek Tower, Papa Alpha Alpha, overhead Golf, 1300ft

Wilco Bravo, Papa Alpha Alpha

Beek Tower, overhead Bravo and leaving the CTR

Frequency change approved, Papa Alpha Alpha

Dutch Mil Info, Papa Hotel, Whiskey Alpha Alpha

Dutch Mil Info, Papa Alpha Alpha, request flight information services

Sqauwking 7005, QNH 1032, Papa Alpha Alpha

Dutch Mil Info, Papa Alpha Alpha, request to leave your frequency for Eindhoven Tower

Frequency Change Approved, Papa Alpha Alpha

Eindhoven Tower, Papa Hotel Whiskey Alpha Alpha

Eindhoven Tower, Papa Alpha Alpha, request crossing your CTR at 2500ft from Zulu to Tango

Crossing approved, maintaining 2800ft, Papa Alpha Alpha

Eindhoven Tower, Papa Alpha Alpha, Overhead Tango, leaving your CTR

Frequency change approved, Papa Alpha Alpha

Dutch Mil Info, Papa Alpha Alpha, request flight information services

Sqauwking 7005, QNH 1032, Papa Alpha Alpha

Dutch Mil Info, Papa Alpha Alpha, request to leave your frequency for Schiphol Tower

Frequency change approved, Papa Alpha Alpha

Schiphol Tower, Papa Hotel Whiskey Alpha Alpha

Schiphol Tower, Papa Alpha Alpha, overhead Maarssen, 3000ft, request for landing runway 22

Descending to 1500ft, wilco Victor, Papa Alpha Alpha

Schiphol Tower, Papa Alpha Alpha, overhead Victor

Wilco Sierra (geen idee), Papa Alpha Alpha

Schiphol Tower, Papa Alpha Alpha turning downwind for runway 22, full stop

Cleared to land runway 22, Papa Alpha Alpha

Schiphol Tower, Papa Alpha Alpha, runway vacated via Golf 5

121.805, Papa Alpha Alpha

Schiphol Ground, Papa Hotel Whiskey Alpha Alpha

Schiphol Ground, Papa Alpha Alpha, request taxi to Kilo apron

Taxi to Kilo apron via Golf 5, taxiway Golf, taxiway Kilo, Papa Alpha

Giving way to the Cessna Citation X, Papa Alpha Alpha

Schiphol Ground, Papa Alpha Alpha, request switching off

Switching off, goodday, Papa Alpha Alpha

---

### Assignment 7

Spelling is correct

De Kooy Ground, Papa Hotel Sierra Bravo Alpha

De Kooy Ground, Papa Bravo Alpha, type is Piper Cherokee, 2 POB, VFR to Rotterdam, Request startup

Startup approved, Papa Bravo Alpha

De Kooy Ground, Papa Bravo Alpha, Ready to Taxi

120.130, Papa Bravo Alpha

De Kooy Tower, Papa Hotel Sierra Bravo Alpha, ready to taxi

Taxi to and hold short runway 03, Papa Bravo Alpha

De Kooy Tower, Papa Bravo Alpha, holding short runway 21, ready for departure

Cleared for take-off runway 03, squawk 7020, Papa Bravo Alpha

De Kooy Tower, Papa Bravo Alpha, leaving your CTR

Frequency change approved, Papa Bravo Alpha

Schiphol Tower, Papa Hotel Sierra Bravo Alpha

Schiphol Tower, Papa Bravo Alpha, request for landing, touch and go

Wilco Victor, Papa Bravo Alpha

Schiphol Tower, Papa Bravo Alpha, overhead Victor

Wilco Bravo, Papa Bravo Alpha

Schiphol Tower, Papa Bravo Alpha, Overhead Bravo, 1000ft

Wilco downwind, Papa Bravo Alpha

Schiphol Tower, Papa Bravo Alpha, turning downwind for runway 22, 500ft

Cleared to land, runway 22, Papa Bravo Alpha

Schiphol tower, Papa Bravo Alpha, going around and leaving the CTR at Hoofddorp, 1000ft

Proceed to Hoofddorp and leave, Papa Bravo Alpha

Schiphol Tower, Papa Bravo Alpha, leaving the CTR

Frequency change approved, Papa Bravo Alpha

Rotterdam Tower, Papa Hotel Sierra Bravo Alpha

Rotterdam Tower, Papa Bravo Alpha, request entering your CTR at 1500ft, inbound in 3 minutes

Wilco entering, Papa Bravo Alpha

Rotterdam Tower, Papa Bravo Alpha, entering your CTR, 1500ft

Rotterdam Tower, Papa Bravo Alpha, request for landing via Hotel arrival, 1500ft

Wilco Hotel, Papa Bravo Alpha

Rotterdam Tower, Papa Bravo Alpha, overhead Hotel

Wilco Whiskey, Papa Bravo Alpha

Rotterdam Tower, Papa Bravo Alpha, overhead Whiskey, 1500ft

Holding at (ombekend punt), Papa Bravo Alpha

Cleared for landing, runway 06, Papa Bravo Alpha

Rotterdam Tower, Papa Bravo Alpha
