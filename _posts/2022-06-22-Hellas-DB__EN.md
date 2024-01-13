---
title: Hellas DB - a demographic database for Greece
author: Jaime García Chaparro
date: 2022-06-22 17:00:00 +0200
categories: [Español, Data Science, Projects]
tags: [español, projects]
pin: false
# math: true
mermaid: true
image:
  path: /assets/2022-06-22-Hellas-DB/dashboard.png
  alt: Hellas DB - a demographic database for Greece
---

# Hellas DB: a demographic database for Greece

During the Data Analytics bootcamp at Ironhack Madrid, the idea to organize historical information about the population of Greece in a unified database ready to analyze arose. After overcoming various linguistic and administrative difficulties and together with the power of visualization, this database allows you to explore Greek demographics at the click of a button.

Visualize Greek geography with the data from this project [through this link](https://public.tableau.com/app/profile/jgchaparro/viz/Hellas_db_dashboard/Generaldashboard).

## Why do we need such a database?

Greece censuses its population every 10 years. Although the most recent was carried out in 2021, it is estimated that the results will not be available until 2024. But ELSTAT, the Greek Statistical Service, makes data from 1991, 2001 and 2011 of the legal and real population available to users.

However, the format is not optimal for two main reasons: it is presented in Excel with several headings and a row can contain information for a town, municipalities or entire regions. Therefore, it would be desirable to have a table with a single type of data per row - in this case, towns - and that does not require cleaning headers.

Furthermore, ELSTAT offers much more information about these same populations, but it is dispersed among several documents. We can enrich this census with data such as altitude, urban or rural character, and geographic location, which will allow us to visualize the entire geography of this country.

## What does the database contain?

* Names of 13,500 localities, including islets.
* Region, decentralized administration, nomós (province), dimos (municipality) and municipal unit of each locality.
* Legal and real population for the years 1991, 2001 and 2011, as well as its changes in absolute and percentage terms.
* Coordinates and elevation for over 13,000 records.
* Information on whether the locality is located on flat, mountainous or semi-mountainous terrain and whether the terrain is urban or rural.
* Periphery (region), nomós, dimos and municipal unit to which the locality belonged in the Kapodistrias plan. This regulated the administrative organization of Greece between 1998 and 2010, when it was replaced by the current Callicrates plan.
* Other information: capitals, insularity, etc.

## How was the database built?

All documents were obtained from the ELSTAT website. First, the original census document was cleaned to obtain a table with each locality with its historical population and administrative data. The total and percentage changes were then calculated. This table will serve as a base and will be expanded with information from other documents.

Later, the document information was added with the coordinates and altitude of each location. However, there is no unique identifier that allows a join (crossing information) between both sources. Added to this is that the names of localities in Greece are frequently repeated: of the 13,550 records, more than 1,300 are used more than once. Agios Georgios (Saint George), the most common, is used 71 times.

The solution consisted of searching for matches for each name in various combinations of administrative units (such as the municipality or the province) until obtaining a single population with a single name in the searched area. For example, Neochori (New Town) appears 49 times, but there is only one Neochori in the municipality of Préveza (south of Epirus), so we can assign coordinates to it.

Unfortunately, because the names are not exactly the same in both sources, in some cases manual disambiguation had to be done and in others it was impossible to locate the populations without external data. In total, coordinates were added for 13,200 units (97.4 % of the registers).

Finally, information was incorporated about the type of terrain (flat or mountainous, urban or rural), whether the locality constitutes the capital of an administrative unit and whether it is located on an island. The final table was saved in CSV and Excel format and is available on GitHub.

## Where could it be improved?

Due to time constraints, it was not possible to develop certain aspects of the database. Therefore, the following lines of improvement remain pending:

* Convert location names from Katharévousa Greek (educated version of Greek, used in some official records) to Demotic Greek (the variant used in daily life).
* Add coordinates for the last 300 unlocated records.
* Convert capital columns into a separate table.
* Translate records in Greek characters to Latin characters.

## Conclusions

This project exemplifies how programming requires expert knowledge about a subject to be successful: it would have been impossible to obtain and work with the data without knowing Greek or without understanding the particularities of regions such as Mount Athos or the Greek islands. Furthermore, having a clear idea of the geography of the Hellenic country has been key to detecting anomalies and streamlining multiple processes.

In summary, despite the difficulties involved in working with real data and administrative changes, I value the experience very positively not only for what it brings on a professional level, but also on a personal level: this database provides answers to questions that the Greek geography enthusiast in me has always wanted to know.

## Links

* [Github repository with the final database and complete code.](https://github.com/jgchaparro/HellasDB)
* [Interactive map with all the locations in the database in Tableau.](https://public.tableau.com/app/profile/jgchaparro/viz/Hellas_db_dashboard/Generaldashboard)f