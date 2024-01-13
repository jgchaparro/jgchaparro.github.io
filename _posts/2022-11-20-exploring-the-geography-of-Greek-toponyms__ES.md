---
title: Explorando la geografía de los topónimos griegos
author: Jaime García Chaparro
date: 2022-11-20 17:00:00 +0200
categories: [Español, Data Science, Projects]
tags: [español, projects]
pin: false
# math: true
mermaid: true
image:
  path: /assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/header.png
  alt: Explorando la geografía de los topónimos griegos

---

Además de su milenaria historia, su rica cultura y habitantes amigables, Grecia ofrece una miríada de temas interesantes para investigar tanto para lugareños como extranjeros. Salpicada de montañas e islas por igual, su diversa geografía contiene un sinfín de topónimos que esconden curiosas historias y patrones. En este artículo, repasaremos algunos de ellas utilizando técnicas de análisis de datos.

Este estudio se apoya en la base de datos [Hellas DB](https://jgchaparro.github.io/posts/Hellas-DB__ES/), que recopila información sobre ciudades, pueblos y otros lugares de Grecia, así como las coordenadas de la mayoría según los datos oficiales del Servicio de Estadística Helénico. Para realizar los cálculos, se han eliminado de la tabla monasterios e islotes deshabitados.

## Pequeña introducción a la división administrativa de Grecia

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/1.png)
*<center>División administrativa de Grecia. Fuente: Wikipedia.</center>*

Antes de sumergirnos en los datos, es necesario tener un conocimiento básico de las divisiones administrativas de Grecia. El país se divide en 13 perifereies o regiones, que contienen 75 unidades regionales o provincias. A su vez, estas unidades regionales se dividen en 332 municipios. Además, hay que reseñar que la ciudad de Atenas se divide en cuatro unidades regionales y que el particular Monte Atos constituye una entidad autónoma especial. Teniendo esto en cuenta, ¡estamos listos para ir directos al asunto!

## Topónimos únicos y repetidos

La base de datos incluye un total de 12 904 asentamientos. Sin embargo, solo hay 9 015 nombres diferentes. Resulta que el 40 % de las localidades comparten su topónimo con al menos una localidad más, y muchas veces con más de una. Además, casi el 10 % de todos los pueblos utiliza uno de los 50 nombres más comunes. Esto constituye un buen punto de partida para analizar la frecuencia de los topónimos en Grecia.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/2__ES.png)

Como se aprecia en la gráfica, los lugares con nombres de santos (aquellos que comienzan por «Agios» o similar) son muy frecuentes. En total, 670 localidades tienen nombres de santos, lo que equivale a casi 1 de cada 20 pueblos (4,72 %). En cinco provincias, esta proporción supera el 10 %, a saber, Míkonos (14,3 %), Magnesia (12,7 %), Beocia (11,7 %) y Lemnos (11,3 %). Por el contrario, Tasos, Evros y Kálimnos son las únicas provincias sin una sola localidad llamada «Agios».

También podemos analizar qué tipo de ubicaciones suelen tener nombres «únicos», es decir, pueblos que no comparten su nombre con otras localidades. Como referencia, el 60 % de todas las ubicaciones griegas tienen nombres únicos.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/3__ES.png)
*<center>Pulsa en la imagen para ampliar el gráfico</center>*

El número de nombres únicos varía enormemente entre regiones: mientras que Andros (80,7 %), Cefalonia (79,6 %) y Kárpatos (78,8 %) están muy por encima del 60 %, en el otro extremo de la tabla podemos encontrar a Beocia (45 %), Lárisa (45,6 %) y Karditsa (46,8 %).

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/4__ES.png)

Aquí ya podemos apreciar algunos patrones claros: en primer lugar, las islas tienen una mayor proporción de topónimos únicos. Esto queda corroborado por el hecho de que las cuatro regiones insulares (el Egeo Meridional y Septentrional, las Islas Jónicas y Creta) son precisamente las cuatro regiones con mayor porcentaje de nombres únicos.

Además, las capitales suelen tener topónimos únicos, especialmente cuanto más alto es el nivel administrativo. 12 de las 13 capitales regionales (92,3 %), 42 de las 49 capitales de provincia (85,7 %) y 241 de las 326 capitales municipales (73,9 %) tienen nombres únicos. Asimismo, los topónimos plurales y las nombres en áreas urbanas tienden a repetirse menos. Sin embargo, no hay diferencias significativas entre los distintos tipos de terreno ni en las zonas rurales.

## Patrones regionales

Having a look at GooglEchando un vistazo a Google Maps, rápidamente queda claro que algunas terminaciones de nombres son más frecuentes en algunos lugares que en otros. Indagar en la distribución geográfica de estos finales nos revela varias historias interesantes.

Entre ellas, quizás -αίικα (-aíika, leído como «-eika») es la más interesante. [Ha suscitado profundos debates sobre su etimología](https://www.lexilogia.gr/threads/%CE%A4%CE%BF%CF%80%CF%89%CE%BD%CF%8D%CE%BC%CE%B9%CE%B1-%CF%83%CE%B5-%CE%B1%CE%AF%CE%B9%CE%BA%CE%B1.510/) y la ortografía griega debido a su inusual combinación de vocales. Aparentemente, este sufijo podría referirse al lugar donde se ubicaban las propiedades de una familia, lo que podría explicar por qué es un sufijo plural neutro. Su geografía es peculiar: aparece principalmente en el oeste de Grecia continental, pero también hay varios grupos aislados en lugares lejanos como Samos o Kilkís.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/5.png)
*<center>Distribución de los topónimos terminados en -αίικα (-aíika)</center>*

Otro tema interesante es la distribución del sufijo -άτα (-áta). Claramente ligado a la isla de Cefalonia, está presente en casi la mitad de los pueblos de la isla. También es un sufijo plural neutro, lo que podría indicar que se trata de un equivalente local de -aíika.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/6.png)
*<center>Distribución de los topónimos terminados en -άτα (-áta)</center>*

Un fenómeno similar se aprecia con -άτικα (-átika) en Corfú, -άνικα (-ánika) en la costa de Laconia y Citera y -ανά (-aná) en Creta y la zona montañosa del centro de Grecia.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/7.png)
*<center>Distribución de los topónimos terminados en -άτικα (-átika)</center>*

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/8.png)
*<center>Distribución de los topónimos terminados en -άνικα (-ánika)</center>*

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/9.png)
*<center>Distribución de los topónimos terminados en -ανά (-aná)</center>*

Otros patrones interesantes son los siguientes:

* Los nombres masculinos singulares de ciudades que terminan en -ές (-és) se encuentran casi exclusivamente en el oeste y centro de Creta.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/10.png)
*<center>Distribución de los topónimos terminados en -ές (-és)</center>*

* Los 8 pueblos que terminan en -έ (-é), una terminación inusual para los sustantivos griegos, se encuentran en Creta y Gavdos. Entre ellos, 7 son nombres femeninos (η Μουρνέ, η Κοξαρέ) y forman el cúmulo se ve en el mapa, mientras que el último es neutro (το Μαδέ) resulta ser el círculo aislado en el centro de Creta.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/11.png)
*<center>Distribución de los topónimos terminados en -έ (-é)</center>*

* Las localidades que terminan en -οβο (-ovo) se encuentran principalmente en el Épiro y se extienden principalmente a lo largo de Grecia occidental.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/12.png)
*<center>Distribución de los topónimos terminados en-οβο (-ovo)</center>*

* Aunque la terminación en -αίοι (-aíoi, leído como -éi) es rara, tiende a aparecer en grupos y no sola.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/13.png)
*<center>Distribución de los topónimos terminados en -αίοι (-aíoi, pronunciado -éi)</center>*

## Pueblos «antiguos» y «nuevos»

Otro patrón que no se ve fácilmente a través de los mapas es el de los pueblos «antiguos» y «nuevos». Un buen número de localidades usa los términos Παλαίο (Paleo, que significa «antiguo»), Νέο (Neo, «nuevo») o cualquiera de sus derivados. Es interesante ver cómo Macedonia y Tracia, dos de los últimos territorios en incorporarse al Estado griego después de las Guerras de los Balcanes, tienen una proporción más elevada de localidades «nuevas». Este fenómeno se vuelve aún más claro cuando se compara la proporción de estos territorios con la del resto de Grecia.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/14__ES.png)

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/15__ES.png)

## Género y número de los topónimos griegos
El idioma griego tiene tres géneros (masculino, femenino y neutro) y dos números (singular y plural). A diferencia del español, en el que los nombres propios no usan artículo, en griego sí que tienen asociado un artículo que nos ayuda a identificar el género y el número del nombre de cada localidad. 

Así, tenemos seis posibilidades:

* Artículos masculinos: singular ο (o), plural οι (oi, leído como «i»)
* Artículos femeninos: singular η (i), plural οι (oi, leído como «i» también) en griego popular y αι (ai, leído como «e») en griego arcaizante, que se utiliza en la base de datos para distinguir femenino y plurales masculinos.
* Artículos neutros: singular το (to) y plural τα (ta).
  

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/16__ES.png)
*<center>Número de localidades según el género y número del artículo</center>*

En general, podemos ver que el artículo más frecuente es el femenino singular, seguido del neutro singular. Por otro lado, el femenino plural es el más raro de todos. Aunque los nombres singulares son mucho más frecuentes, es interesante ver cómo los topónimos plurales neutros abundan mucho más. Esto se debe principalmente a la abundancia de sufijos plurales neutros en ciertas regiones, tal y como abordamos en las primeras secciones del artículo.
De nuevo, la distribución de géneros y números cambia entre las diferentes regiones debido a los diferentes patrones de nombres, como se recoge en la imagen a continuación.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/17__ES.png)
*<center>Distribución de género y número de topónimos por región</center>*

Mirando más de cerca los gráficos, podemos inferir una clara diferencia entre las regiones insulares (Egeo septentrional y meridional, Creta y las islas Jónicas) y el continente. Las islas usan nombres singulares femeninos con mucha menos frecuencia y favorecen los masculinos singulares. El caso de las islas Jónicas es especialmente llamativo: es la única región en la que predominan los nombres plurales neutros debido al uso intensivo de los sufijos -άτα (-áta), -άνικα (-ánika) y, en menor medida, - αίικα (-aíika).

Estas diferencias se pueden ver fácilmente comparando las proporciones de las islas y las del continente.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/18__ES.png)

Due to space limitations, you can find the table with the distribution for each province at the end of the article. Some interesting cases are Samos, which has the highest proportion of masculine plural names, Mykonos, that has no plural names, and Kerkyra, with the most balanced distribution.

## Otros datos

* Hay 51 nombres de ciudades que contienen ϊ y 21 que contienen ΐ, ambos caracteres inusuales en el idioma griego usados para romper diptongos, equivalentes a la «ü» en español.
* La única población que contiene ϋ en su nombre es [el pequeño pueblo de Ταϋγέτη](https://el.wikipedia.org/wiki/%CE%A4%CE%B1%CF%8B%CE%B3%CE%AD%CF%84%CE%B7_%CE%9B%CE%B1%CE%BA%CF%89%CE%BD%CE%AF%CE%B1%CF%82) (Taygeti), cerca de Esparta.

* El pueblo de de Παληοχώρα (Paliochora), en Argólida, es la única ciudad catalogada que contiene -ηο- (-io-) en su nombre.
* De media, los topónimos griegos de una sola palabra tienen 9 letras.

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/19__ES.png)

* El topónimo de una palabra más largo es [Σταματογιανναίικα](https://el.wikipedia.org/wiki/%CE%A3%CF%84%CE%B1%CE%BC%CE%B1%CF%84%CE%BF%CE%B3%CE%B9%CE%B1%CE%BD%CE%BD%CE%B1%CE%AF%CE%B9%CE%BA%CE%B1_%CE%91%CE%B9%CF%84%CF%89%CE%BB%CE%BF%CE%B1%CE%BA%CE%B1%CF%81%CE%BD%CE%B1%CE%BD%CE%AF%CE%B1%CF%82) (Stamatogiannaíika) en Etolia-Acarnania, con 17 letras.

* The longest one-word toponym is [Σταματογιανναίικα](https://el.wikipedia.org/wiki/%CE%A3%CF%84%CE%B1%CE%BC%CE%B1%CF%84%CE%BF%CE%B3%CE%B9%CE%B1%CE%BD%CE%BD%CE%B1%CE%AF%CE%B9%CE%BA%CE%B1_%CE%91%CE%B9%CF%84%CF%89%CE%BB%CE%BF%CE%B1%CE%BA%CE%B1%CF%81%CE%BD%CE%B1%CE%BD%CE%AF%CE%B1%CF%82) (Stamatogiannaiíka) in Aetolia-Acarnania, with 17 letters.
* El premio al topónimo más corto se lo lleva la [isla de Ρω (Ro)](https://en.wikipedia.org/wiki/Ro,_Greece), hogar de la famosa [Dama de Ro](https://en.wikipedia.org/wiki/Lady_of_Ro), que vivía sola en la isla e izaba la bandera griega todos los días desde 1943 hasta su muerte en 1982.

## Conclusiones

La geografía de los topónimos griegos representa la parte visible de aspectos que de otro modo serían abstractos, como la historia, el idioma y las migraciones.

En general, las montañas del Pindo actúan como una barrera natural entre el oeste de Grecia, que muestra patrones más claros, y el resto del país. El Peloponeso, una de las regiones más importantes de la antigua civilización griega, destaca gracias a la variedad de sufijos en los topónimos y el uso de letras y combinaciones poco comunes.

Las islas también presentan características interesantes que las distinguen del continente: algunos ejemplos son la mayor proporción de nombres únicos, la menor proporción de pueblos «antiguos» y «nuevos», la diferente distribución de géneros y números, y el uso de sufijos locales, fáciles de encontrar en Corfú y Cefalonia, pero presentes también en Creta.

En cuanto al resto del país, se han detectado pocos patrones aparte de Macedonia y Tracia, aunque es probable que un estudio más profundo pueda revelar nuevos hallazgos para estas vastas regiones. La única tendencia común a todo el país es la mayor probabilidad de que las ciudades y pueblos importantes tengan nombres únicos.
Algunas líneas futuras de investigación incluyen explorar más a fondo la distribución de otros comienzos y finales de topónimos prometedores, como -αινα (-aina, leído como -ena), y explorar más de cerca la Grecia continental al este de los montes Pindo y el Egeo oriental.

## Anexo: distribución de género y número de los topónimos para todas las provincias

![](/assets/2022-11-20-exploring-the-geography-of-Greek-toponyms/20__ES.png)