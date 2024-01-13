---
title: Hellas Mellon Project — un pronóstico de la población de Grecia
author: Jaime García Chaparro
date: 2022-06-07 17:00:00 +0200
categories: [Εspañol, Data Science, Projects]
tags: [español, projects]
pin: false
# math: true
mermaid: true
image:
  path: /assets/2022-06-07-Hellas-Mellon-Project/dashboard.png
  alt: Hellas DB un pronóstico de la población de Grecia
---

# Hellas Mellon Project: un pronóstico de la población de Grecia

[Tras analizar el pasado y presente de la población en Grecia](https://jgchaparro.github.io/posts/Hellas-DB__ES/), estudiar su futuro constituye un paso natural. Sobre esta premisa se construyó el Hellas Mellon Project, que trata de representar los movimientos demográficos futuros utilizando la ciencia de datos y modelos estadísticos.

Explora los pronósticos de la demografía griega en un mapa interactivo [a través de este enlace](https://public.tableau.com/app/profile/jgchaparro/viz/HellasMellonDashboard/HellasMellonDashboard).

## ¿Por qué este proyecto?

A pesar de su reducida extensión, Grecia es un país particular: además de la zona continental, cuenta con casi 100 islas habitadas, así como innumerables islotes. Desde pequeño, me ha fascinado cómo cada isla posee una irrepetible geografía y una historia particular, pero a la vez puede agruparse en archipiélagos con características comunes.

Sin embargo, algunas islas parecen estar camino de sufrir un abrupto punto y aparte debido a la despoblación. Un buen ejemplo es Anticitera, una pequeña isla donde se encontró la primera computadora analógica de la historia: su población en 2011 no llegaba a los 75 habitantes. Ante esta situación, resultaba lógico preguntarse lo siguiente…

## ¿Cómo pronosticar la población futura de Grecia?

En primer lugar, los datos se obtuvieron del Servicio Estadístico Griego (ELSTAT). En particular, se buscaron archivos con series temporales: tablas con información sobre el valor de una variable cada año, como la evolución de la población cada año. En total, se seleccionaron cinco series temporales: población, matrimonios, nacimientos, fallecimientos y PIB per cápita. Puesto que la información de cada pueblo y ciudad solo se obtiene en los censos nacionales cada diez años, hubo que usar información agrupada a nivel provincial, que sí ofrece datos año a año desde hace dos décadas.

Para construir las predicciones, utilicé un modelo ARIMAX para cada provincia. Este método estadístico estudia el comportamiento pasado de una variable para conocer su evolución futura. Además, tiene la ventaja de que puede enriquecerse con información de otras variables relevantes.

Los hiperparámetros se seleccionaron mediante grid searching (probar todas las combinaciones para hallar la más eficiente) y los modelos se clasificaron en función de su RMSE (error medio entre los datos reales y las predicciones de esos datos). Por último, se reentrenaron los modelos hasta tres veces para corregir predicciones no realistas.

Se calcularon cuatro modelos auxiliares: tres modelos ARIMA para los matrimonios, los fallecimientos y el PIB per cápita y un modelo ARIMAX para los nacimientos en función de los matrimonios. La información de estos modelos se añadió a la serie temporal de la población para obtener una proyección de la evolución demográfica de cada región hasta 2030. Además, se construyeron dos escenarios, pesimista y optimista, que tienen en cuenta la variabilidad inherente al futuro.

## ¿Y cuáles son los resultados?

En conjunto, se observan tendencias muy claras. La población general de Grecia irá en descenso hasta ubicarse entre los 10,1 y 10,6 millones de habitantes en 2030. Por otro lado, los fallecimientos seguirán creciendo desde los 130 000 de 2021 hasta los 150 000 en 2030. Lo contrario ocurre con los nacimientos: irá cayendo año a año hasta los 68 000 nuevos nacimientos. Un dato llamativo es la fuerte caída en la natalidad en 2021, del 17 %, probablemente causada por la emergencia sanitaria del COVID-19. Exactamente el mismo patrón se repite con los nuevos matrimonios.

Por regiones también se aprecian ciertos patrones. Por ejemplo, dentro de Grecia continental, a pesar de que casi todas las zonas pierden población, se distinguen dos tipos de provincias:
* Las provincias más pobladas y urbanas (Ática, Salónica, Acaya) tuvieron más nacimientos que muertes hasta 2012.
* El resto de provincias, más rurales, con una tasa de mortalidad por encima de los nacimientos ya desde el inicio de los registros en 2002.

Esto nos habla de una tendencia general a la despoblación más avanzada en las regiones del interior y que irrumpió en los grandes centros urbanos a partir de la crisis económica de 2009 - 2012.

La Grecia insular presenta un panorama distinto. En los principales archipiélagos del Egeo, se sufrirá menos la despoblación (Cícladas) e incluso se prevén aumentos de la población (Dodecaneso) con una natalidad mucho más elevada que el continente. Creta replica las tendencias del continente por su mortalidad elevada y su natalidad reducida, pero solo de forma parcial: la isla experimentará un aumento general de la población, probablemente debido a la inmigración.

Un punto de interés son las islas del Egeo septentrional: Lesbos, Samos y Quíos. En estas provincias, la población llevaba 15 años estancada hasta que en 2016, con la crisis de los refugiados llegados desde Turquía, se produjo un aumento repentino de más del 10 % hasta 2020.

Por último, las islas del Jónico siguen un patrón similar a las provincias de la Grecia interior, aunque con excepciones: algunos ejemplos son Cefalonia, que mantendrá su población, y Zante, que exhibió una alta natalidad antes de la crisis.

## Conclusiones

Este proyecto constituye la extensión de la Hellas Database, que explora el pasado reciente de la demografía griega. Aunque similares en fondo, los métodos de trabajo son distintos: aquí, se hace necesario incorporar modelos estadísticos, que alargan enormemente el tiempo de procesado de la información. Afortunadamente, tanto la obtención de los datos como la visualización fueron más simples. Como líneas de mejora, habría sido deseable contar con datos desagregados a nivel de localidad y pulir ciertos modelos con pronósticos posibles, pero arriesgados.

Con todo, los resultados han sido muy interesantes: por un lado, confirman la despoblación y envejecimiento del país heleno que podía intuirse a partir del conocimiento de la realidad social. Por otro, chocan frontalmente con mis creencias previas sobre el futuro de las islas: a nivel regional, no se observan hay tendencias que presagien el fin de la Grecia insular. Por tanto, y para alegría del amante de la geografía que me considero, la historia seguirá escribiéndose en estos épicos parajes.

## Enlaces

* [Repositorio en Github con los resultados de las proyecciones y el código completo.](https://github.com/jgchaparro/HellasDB-Mellon)
* [Mapa interactivo con todas las proyecciones en Tableau.](https://public.tableau.com/app/profile/jgchaparro/viz/HellasMellonDashboard/HellasMellonDashboard)