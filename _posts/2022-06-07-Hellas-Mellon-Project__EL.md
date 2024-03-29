---
title: Hellas Mellon Project — μια πρόβλεψη του πληθυσμού της Ελλάδας
author: Jaime García Chaparro
date: 2022-06-07 17:00:00 +0200
categories: [Ελληνικά, Data Science, Projects]
tags: [ελληνικά, projects]
pin: false
# math: true
mermaid: true
image:
  path: /assets/2022-06-07-Hellas-Mellon-Project/dashboard.png
  alt: Hellas DB μία δημογραφική βάση δεδομένων για όλη την Ελλάδα
---

# Hellas Mellon Project: μια πρόβλεψη του πληθυσμού της Ελλάδας

[Μετά την ανάλυση του παρελθόντος και του παρόντος του πληθυσμού στην Ελλάδα](https://jgchaparro.github.io/posts/Hellas-DB__EL/), η μελέτη του μέλλοντός του είναι ένα φυσικό βήμα. Με αυτό το σκοπό, το Hellas Mellon Project προσπαθεί να αναπαραστήσει τις μελλοντικές δημογραφικές κινήσεις με την βοήθεια της επιστήμης δεδομένων και των στατιστικών μοντέλων.

Εξερευνήστε τις ελληνικές δημογραφικές προβλέψεις σε έναν διαδραστικό χάρτη [σε αυτόν τον συνδέσμο](https://public.tableau.com/app/profile/jgchaparro/viz/HellasMellonDashboard/HellasMellonDashboard).

## Γιατί αυτή η ανάλυση;

Παρά το σχτεικά μικρό της μέγεθος, η Ελλάδα είναι μια ιδιαίτερη χώρα: εκτός από την ηπειρωτική χώρα, έχει σχεδόν 100 κατοικημένα νησιά, καθώς και αμέτρητα νησάκια. Από παιδί με γοήτευε το πώς κάθε νησί έχει μια ανεπανάληπτη γεωγραφία και μια ιδιαίτερη ιστορία, αλλά ταυτόχρονα μπορεί να ομαδοποιηθεί σε αρχιπέλαγος με κοινά χαρακτηριστικά.

Ωστόσο, φαίνεται ότι ορισμένα νησιά καταπολεμούν σοβαρά με την ερήμωση του πληθυσμού. Ένα καλό παράδειγμα είναι τα Αντικύθηρα, ένα μικρό νησί όπου βρέθηκε ο πρώτος αναλογικός υπολογιστής της ιστορίας: ο πληθυσμός του στο 2011 δεν ξεπέρασε τους 75 κατοίκους. Με αυτή την κατάσταση, ήταν λογικό να αναρωτιέμαι το εξής…

## Πώς να προβλέψουμε τον μελλοντικό πληθυσμό της Ελλάδας;

Πρώτα, τα στοιχεία ελήφθησαν από την Ελληνική Στατιστική Υπηρεσία. Συγκεκριμένα, χρειαστήκαν αρχεία με χρονοσειρές: πίνακες με πληροφορίες για μία μεταβλητής κάθε χρόνο, όπως η εξέλιξη του πληθυσμού. Συνολικά, επιλέχθηκαν πέντε χρονοσειρές: πληθυσμός, γάμοι, γεννήσεις, θάνατοι και κατά κεφαλήν ΑΕΠ. Δεδομένου ότι οι πληροφορίες για κάθε τοποθεσία λαμβάνονται μόνο στις εθνικές απογραφές κάθε δέκα χρόνια, ήταν απαραίτητο να χρησιμοποιηθούν ομαδοποιημένες πληροφορίες σε επαρχιακό επίπεδο, για το οποίο είναι διαθέσιμα δεδομένα για κάθε χρόνο για πάνω από δύο δεκαετίες.

Για την δημιουργία των προβλέψεων, χρησιμοποίυηκε ένα μοντέλο ARIMAX για κάθε επαρχία. Αυτή η στατιστική μέθοδος μελετά την προηγούμενη συμπεριφορά μιας μεταβλητής για να γνωρίζει τη μελλοντική της εξέλιξη. Επιπλέον, έχει το πλεονέκτημα ότι μπορεί να εμπλουτιστεί με πληροφορίες για άλλες μεταβλητές.

Οι υπερπαράμετροι επιλέχθηκαν μέσω αναζήτησης πλέγματος (δόκιμη όλων των συνδυασμών για να βρεθεί ο πιο αποτελεσματικός) και τα μοντέλα ταξινομήθηκαν σύμφωνα με το RMSE τους (μέσο σφάλμα μεταξύ των πραγματικών δεδομένων και των προβλέψεων αυτών των δεδομένων). Τέλος, τα μοντέλα επανεκπαιδεύτηκαν έως και τρεις φορές για τη διόρθωση μη ρεαλιστικών προβλέψεων.

Υπολογίστηκαν τέσσερα βοηθητικά μοντέλα: τρία μοντέλα ARIMA για γάμους, θανάτους και κατά κεφαλήν ΑΕΠ και ένα μοντέλο ARIMAX για τις γεννήσεις. Οι πληροφορίες από αυτά τα μοντέλα προστέθηκαν στις χρονοσειρές του πληθυσμού για να ληφθεί μια προβολή της δημογραφικής εξέλιξης κάθε περιοχής έως το 2030. Επιπλέον, κατασκευάστηκαν δύο σενάρια, απαισιόδοξο και αισιόδοξο, που λαμβάνουν υπόψη τη μεταβλητότητα του μέλλοντος.

## Και ποια είναι τα αποτελέσματα;

Συνολικά, παρατηρούνται πολύ σαφείς τάσεις. Ο πληθυσμός της Ελλάδας θα μειωθεί μέχρι τους 10,1 και 10,6 εκατομμύρια κατοίκυς στο 2030 στα διάφορα σενάρια. Επιπλέον, οι θάνατοι θα συνεχίσουν να αυξάνονται από 130.000 στο 2021 σε 150.000 στο 2030. Το αντίθετο συμβαίνει με τις γεννήσεις: θα πέφτουν κάθε χρόνο μέψρι τις 68.000 νέες γεννήσεις. Ένα εντυπωσιακό γεγονός είναι η απότομη πτώση του ποσοστού γεννήσεων το 2021 κατά 17 %, που πιθανότατα προκλήθηκε από το COVID-19. Ακριβώς η ίδια τάση επαναλαμβάνεται και με τους νέους γάμους.

Ανά περιοχές εκτιμώνται παρόμοιες τάσεις. Για παράδειγμα, στην ηπειρωτική Ελλάδα, παρά το γεγονός ότι σχεδόν όλες οι περιοχές χάνουν πληθυσμό, διακρίνονται δύο τύποι επαρχιών:
* Οι αστικές επαρχίες (Αττική, Θεσσαλονίκη, Αχαΐα), που είχαν περισσότερες γεννήσεις παρά θανάτους μέχρι το 2012.
* Οι υπόλοιπες επαρχίες, πιο αγροτικές, με θνησιμότητα πάνω από τις γεννήσεις ήδη από την αρχή των αρχείων το 2002.

Αυτό μας δείχνει μια γενική τάση προς πιο προχωρημένη ερήμωση στις εσωτερικές περιοχές και που ξέσπασε στα μεγάλα αστικά κέντρα μετά την οικονομική κρίση του 2009–2012.

Η νησιωτική Ελλάδα παρουσιάζει μια διαφορετική εικόνα. Στα κύρια νησιά του Αιγαίου θα σημειωθεί λιγότερη ερήμωση (Κυκλάδες) και αναμένονται ακόμη και αυξήσεις στον πληθυσμό (Δωδεκάνησα) με πολύ υψηλότερο ποσοστό γεννήσεων. Η Κρήτη αναπαράγει τις τάσεις της ηπειρωτικής χώρας όσον αφορά την υψηλή θνησιμότητα και τα χαμηλά ποσοστά γεννήσεων, αλλά μόνο εν μέρει: στο νησί θα παρατηρηθεί συνολική αύξηση του πληθυσμού, πιθανότατα λόγω της μετανάστευσης.

Σημείο ενδιαφέροντος αποτελούν τα νησιά του Βορείου Αιγαίου: Λέσβος, Σάμος και Χίος. Στις επαρχίες αυτές ο πληθυσμός είχε μείνει στάσιμος για 15 χρόνια μέχρι το 2016, όταν, λόγω κρίσης των προσφύγων από την Τουρκία, σημειώθηκε ξαφνική αύξηση άνω του 10% μέχρι το 2020.

Τελικά, τα Επτάνησα ακολουθούν παρόμοιες τάσεις με τις επαρχίες της ενδοχώρας, αν και με εξαιρέσεις: μερικά παραδείγματα είναι η Κεφαλονιά που θα διατηρήσει τον πληθυσμό της και η Ζάκυνθος που είχε υψηλό ποσοστό γεννήσεων πριν από την κρίση.

## Συμπεράσματα

Η μελέτη αυτή αποτελεί την επέκταση της Hellas Database, η οποία διερευνά το πρόσφατο παρελθόν της ελληνικής δημογραφίας. Αν και ουσιαστικά παρόμοιες, οι μέθοδοι εργασίας είναι διαφορετικές: εδώ, είναι απαραίτητο να ενσωματωθούν στατιστικά μοντέλα, τα οποία επιμηκύνουν σημαντικά τον χρόνο επεξεργασίας των πληροφοριών. Ευτυχώς, τόσο η συλλογή δεδομένων όσο και η οπτικοποίηση ήταν απλούστερες. Ως γραμμές βελτίωσης, θα ήταν επιθυμητό να υπάρχουν διαχωρισμένα δεδομένα σε επίπεδο τοποθεσίας και να τελειοποιηθούν ορισμένα μοντέλα με πιθανές αλλά παράξενες προβλέψεις.

Συνολικά, τα αποτελέσματα ήταν πολύ ενδιαφέροντα: αφενός, επιβεβαιώνουν την ερήμωση και τη γήρανση της Ελλάδας που θα μπορούσε να διαισθανθεί από τη γνώση της κοινωνικής πραγματικότητας. Αφετέρου, συγκρούονται με τις προηγούμενες πεποιθήσεις μου για το μέλλον των νησιών: σε περιφερειακό επίπεδο, δεν υπάρχουν τάσεις που προαναγγέλλουν το τέλος της νησιωτικής Ελλάδας. Ως εκ τούτου, και προς χαρά του λάτρη της γεωγραφίας που θεωρώ τον εαυτό μου, η ιστορία θα συνεχίσει να γράφεται σε αυτούς τους επικούς τόπους.

## Σύνδεσμοι

* [Github με τις ολόκληρες χρονοσειρές και τον πλήρη κώδικα.](https://github.com/jgchaparro/HellasDB-Mellon)
* [Διαδραστικός χάρτης με τις προβλέψεις στο Tableau.](https://public.tableau.com/app/profile/jgchaparro/viz/HellasMellonDashboard/HellasMellonDashboard)