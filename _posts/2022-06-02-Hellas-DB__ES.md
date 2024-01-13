---
title: Hellas DB - una base de datos demográfica para toda Grecia
author: Jaime García Chaparro
date: 2022-06-02 17:00:00 +0200
categories: [Español, Data Science, Projects]
tags: [español, projects]
pin: false
# math: true
mermaid: true
image:
  path: /assets/2022-06-02-Hellas-DB/dashboard.png
  alt: Hellas DB - una base de datos demográfica para toda Grecia
---

# Hellas DB: una base de datos demográfica para toda Grecia

Durante el bootcamp de Data Analytics en Ironhack Madrid, surgió la idea de organizar información histórica sobre la población de Grecia en una base de datos unificada y lista para analizar. Tras superar diversas dificultades lingüísticas y administrativas y junto con el poder de la visualización, esta base de datos permite explorar la demografía griega a golpe de clic.

Visualiza la geografía griega con los datos de este proyecto [en este enlace](https://public.tableau.com/app/profile/jgchaparro/viz/Hellas_db_dashboard/Generaldashboard).

## ¿Por qué necesitamos una base de datos así?

Grecia censa su población cada 10 años. Aunque el más reciente se realizó en 2021, se estima que los resultados no estarán disponibles hasta 2024. Pero ELSTAT, el Servicio Estadístico Griego, pone a disposición de los usuarios los datos de 1991, 2001 y 2011 de la población legal y real.

Sin embargo, el formato no es óptimo por dos motivos principales: se presenta en Excel con varios encabezados y una fila puede contener información de un pueblo, municipios o regiones completas. Por tanto, sería deseable contar con una tabla con un único tipo de dato por fila -en este caso, los pueblos - y que no requiera limpiar encabezados.

Además, el ELSTAT ofrece mucha más información sobre estas mismas localidades, pero está dispersa entre varios documentos. Podemos enriquecer este censo con datos como la altitud, el carácter urbano o rural, y la ubicación geográfica, que nos permitirá visualizar toda la geografía de este país.

## ¿Qué contiene la base de datos?

* Nombres de 13 500 localidades, incluyendo islotes.
* Región, administración descentralizada, nomós (provincia), dimos (municipio) y unidad municipal de cada localidad.
* Población legal y real para los años 1991, 2001 y 2011, así como sus cambios en términos absolutos y porcentuales.
* Coordenadas y elevación para más de 13 000 registros.
* Información sobre si la localidad se encuentra en terreno llano, montañoso o semimontañoso y si el terreno es urbano o rural.
* Periferia (región), nomós, dimos y unidad municipal a la que pertenecía la localidad en el plan Kapodistrias. Este regulaba la organización administrativa de Grecia entre 1998 y 2010, cuando se sustituye por el actual plan Calícrates.
* Otra información: capitales, insularidad, etc.

## ¿Cómo se ha construido la base de datos?

Todos los documentos se obtuvieron de la página web del ELSTAT. En primer lugar, se limpió el documento original del censo para obtener una tabla con cada localidad con su población histórica y sus datos administrativos. Seguidamente, se calcularon los cambios totales y porcentuales. Esta tabla servirá de base y se irá ampliando con información de otros documentos.

Más adelante, se añadió la información del documento con las coordenadas y altitud de cada localidad. Sin embargo, no hay un identificador único que permita hacer un join (cruzar la información) entre ambas fuentes. A esto se le suma a que los nombres de localidades en Grecia se repiten frecuentemente: de los 13 550 registros, más de 1300 se usan más de una vez. Agios Georgios (San Jorge), el más común, se emplea 71 veces.

La solución consistió en buscar coincidencias cada nombre en varias combinaciones de unidades administrativas (como el municipio o la provincia) hasta obtener una única población con un único nombre en la zona buscada. Por ejemplo, Neochori (Pueblo Nuevo) aparece 49 veces, pero solo hay un Neochori en el municipio de Préveza (sur del Épiro), por lo que podemos asignarle unas coordenadas.

Desafortunadamente, debido a que los nombres no son exactamente iguales en ambas fuentes, en algunos casos hubo que desambiguar manualmente y en otros resultaba imposible ubicar las poblaciones sin datos externos. En total, se añadieron coordenadas para 13 200 unidades, el 97,4 %.

Por último, se incorporó información acerca del tipo de terreno (llano o montañoso, urbano o rural), si la localidad constituye la capital de una unidad administrativa y si se encuentra en una isla. La tabla final se guardó en formato CSV y Excel y está disponible en GitHub.

## ¿Dónde puede mejorar?

Debido a las restricciones de tiempo, no fue posible desarrollar ciertos aspectos de la base de datos. Por lo tanto, quedan pendientes como líneas de mejora:

* Convertir los nombres de las localizaciones del griego katharévousa (versión culta del griego, usada en algunos registros oficiales) al griego demótico (la variante usada en la vida diaria).
* Añadir coordenadas para los últimos 300 registros sin localizar.
* Convertir las columnas de capitales en una tabla separada.
* Traducir los registros en caracteres griegos a caracteres latinos.

## Conclusions

This project exemplifies how programming requires expert knowledge about a subject to be successful: it would have been impossible to obtain and work with the data without knowing Greek or without understanding the particularities of regions such as Mount Athos or island Greece. Furthermore, having a clear idea of the geography of the Hellenic country has been key to detecting anomalies and streamlining multiple processes.

In summary, despite the difficulties involved in working with real data and administrative changes, I value the experience very positively not only for what it brings on a professional level, but also on a personal level: this database provides answers to questions that the The Greek geography enthusiast in me has always wanted to know.

## Links

* [Github repository with the final database and complete code.](https://github.com/jgchaparro/HellasDB)
* [Interactive map with all the locations in the database in Tableau.](https://public.tableau.com/app/profile/jgchaparro/viz/Hellas_db_dashboard/Generaldashboard)f