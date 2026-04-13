let map;
let autocompleteInput;

function initMap() {
  // Map options
  var options = {
    zoom: 9,
    center: {lat: 40.501593910213494, lng: -74.44718800463087}
  }

  // Create new map
  map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event) {
    // Add marker
    addMarker({coords: event.latLng});
  });

  // Add Marker
  var marker = new google.maps.Marker({
    position: {lat: 40.50366255704436, lng: -74.42643791474683},
    map: map,
    icon: {
      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
      scaledSize: new google.maps.Size(30, 30)
    }
  });

  // Info Window
  var infoWindow = new google.maps.InfoWindow({
    content: "<h3>Highland Park Borough School District</h3>"
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  // Array of markers
  var markers = [
    {
      coords: {lat: 39.370775370708095, lng: -74.63275044934986},
      iconImage: {
        url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
        scaledSize: new google.maps.Size(80, 52)
      },
      content: "<h3> Egg Harbor Township School District</h3><h4>Contact: Michele Schreiner<br>Email: schreinm@eht.k12.nj.us<br>Offers assistance with:<br><ul> <li>Promotion and/or recruiting</li> <li>Equitable access</li> <li>Latin, Less commonly taught languages</li> <li>Multilingual learner participation</li> <li>Administering assessments and/or multiple assessments</li> <li>Establishing a testing schedule</li> <li>Celebrating students</li> <li>Using Seal of Biliteracy data to inform instruction</li> <li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li> <li>Writing/keyboards for non-romanized alphabets</li> <li>Assessing students in multiple languages</li> </ul></h4>"
    },
    {
        coords: { lat: 39.44297633816074, lng: -74.69664158067928 },
        iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
        },
        content: "<h3>Atlantic County Vocational School District</h3><h4>Contact:Michele Lockhart<br>Email:mlockhart@acitech.org<br>Offers assistance with:<br><ul><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li></ul></h4>",
      },
      {
        coords: { lat: 39.507159096056576, lng: -74.89770866439596 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Buena Regional School District",
      },
      
      {
        coords: { lat: 39.60272105036043, lng: -74.64472120809609 },
        iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
        },
        content: "<h3>Greater Egg Harbor Regional High School District</h3><h4>Contact: Jennifer Rushton<br>Email: jrushton@gehrhsd.net<br>Offers assistance with:<br><ul><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li></ul></h4>",
      },
      {
        coords: { lat: 39.66220126467725, lng: -74.76764957890819 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Hammonton School District",
      },
      {
        coords: { lat: 39.3458017921905, lng: -74.57592452411984 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Mainland Regional High School",
      },
      {
        coords: { lat: 40.92228273058032, lng: -74.000684622772 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Bergenfield Borough School District",
      },
      {
        coords: { lat: 40.87796245481691, lng: -74.02733861965869 },
        iconImage: {
        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "Bogota Public School District",
      },
      {
        coords: { lat: 40.83480972501389, lng: -74.09397654277159 },
        iconImage: {
        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "Carlstadt-East Rutherford Regional High School District",
      },
      {
        coords: { lat: 40.83819579615866, lng: -74.09200382613925 },
        iconImage: {
        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "Cliffside Park School District",
      },
      {
        coords: { lat: 40.94228752631826, lng: -73.95726961194204 },
        iconImage: {
        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "Cresskill Public School District",
      },
      {
        coords: { lat: 40.94554620762857, lng: -73.99741544969325 },
        iconImage: {
        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "Dumont Public School District",
      },
      {
        coords: { lat: 40.91001404760006, lng: -74.1189802772256 },
        iconImage: {
        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "Elmwood Park School District",
      },
      {
        coords: { lat: 40.91056953250821, lng: -73.98243529143427 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Englewood Public School District",
      },
      {
        coords: { lat: 40.94243619452661, lng: -74.13163674184253 },
        iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
        },
        content: "<h3>Fair Lawn Public School District</h3><h4>Contact:Liliana Lopez<br>Email:llopez@fairlawnschools.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Less commonly taught languages</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule,Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Writing/keyboards for non-romanized alphabets</li><li>Assessing students in multiple languages</li></ul></h4>",
      },
      {
        coords: { lat: 40.858950378331066, lng: -73.96588494485125 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Fort Lee School District",
      },
      {
        coords: { lat: 40.83819579615866, lng: -74.09200382613925 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Cliffside Park School District",
      },
      {
        coords: { lat: 40.87799981464709, lng: -74.10620490678258 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Garfield Public School District",
      },
      {
        coords: { lat: 40.888598780991764, lng: -74.0434712232841 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Hackensack School District",
      },
      {
        coords: { lat: 40.8659118317516, lng: -74.07427928791073 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Hasbrouck Heights School District",
      },
      {
        coords: { lat: 40.87318578291395, lng: -74.08689608179402 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Lodi School District",
      },
      {
        coords: { lat: 40.81163983614381, lng: -74.12496596664714 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Lyndhurst Public School District",
      },
      {
        coords: { lat: 41.1016090894962, lng: -74.18455914595205 },
        iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
        },
        content: "<h3>Mahwah Township Public School District</h3><h4>Contact: Courtney Carrelha<br>Email: Ccarrelha@mahwah.k12.nj.us<br>Offers assistance with:<br><ul> <li>Administering assessments and/or multiple assessments</li></ul></h4>",
      },
      {
        coords: { lat: 41.00155835473554, lng: -74.13842676257141 },
        iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
        },
        content: "Midland Park School District",
      },
      
        {
          coords: { lat: 41.00155835473554, lng: -74.13842676257141 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Midland Park School District",
        },
        {
          coords: { lat: 40.9381957728431, lng: -74.02064885134124 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "New Milford Public School District",
        },
        {
          coords: { lat: 40.793335981478435, lng: -74.13056347242673 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "North Arlington School District",
        },
        {
          coords: { lat: 41.04224369750501, lng: -74.1446279394318 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Northern Highlands Regional High School District</h3><h4>Contact:Susan Spencer<br>Email:spencers@northernhighlands.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li>li>Establishing a testing schedule</li><li>Celebrating students</li><li>Assessing students in multiple languages</li></ul></h4>",
        },
        {
          coords: { lat: 40.9838834891424, lng: -73.96923194545401 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Northern Valley Regional High School District",
        },
        {
          coords: { lat: 40.85436308411704, lng: -73.99894978566225 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Palisades Park School District",
        },
        {
          coords: { lat: 40.95875224808574, lng: -74.06445513834139 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Paramus Public School District</h3><h4>Contact:Melissa Quackenbush<br>Email:mquackenbush@paramusschools.org<br>Offers assistance with:<br><ul><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Assessing students in multiple languages</li></ul></h4>",
        },
        {
          coords: { lat: 41.03427366854512, lng: -74.04217967660293 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Park Ridge School District",
        },
        {
          coords: { lat: 41.01874204834706, lng: -74.04921976160081 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Pascack Valley Regional High School District",
        },
        {
          coords: { lat: 41.003691433241094, lng: -74.19479522914841 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Ramapo Indian Hills Regional High School District",
        },
        {
          coords: { lat: 41.06443933838017, lng: -74.13453786647479 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Ramsey School District",
        },
        {
          coords: { lat: 45.79969939449979, lng: -122.69434363536912 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Ridgefield School District",
        },
        {
          coords: { lat: 40.84824239971903, lng: -74.00030193729789 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Ridgefield Park Public School District",
        },
        {
          coords: { lat: 41.00155835473554, lng: -74.13842676257141 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Midland Park School District",
        },
        {
          coords: { lat: 40.982621018729006, lng: -74.03075407896056 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "River Dell Regional School District",
        },
        {
          coords: { lat: 40.842677025874835, lng: -74.10855106908484 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Rutherford School District",
        },
        {
          coords: { lat: 40.918514287987556, lng: -74.10019380823871 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Saddle Brook School District</h3><h4>Contact:Nicole De Bonis<br>Email:ndebonis@sbpsnj.org<br>Offers assistance with:<br><ul><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Celebrating students</li></ul></h4>",
        },
        {
          coords: { lat: 40.90499113910852, lng: -74.0103296422908 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Teaneck School District",
        },
        {
          coords: { lat: 40.93430857906943, lng: -73.95740288907388 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Tenafly Public School District</h3><h4>Contact: Elizabeth Giblin<br>Email: egiblin@tenafly.k12.nj.us<br>Offers assistance with:<br><ul><li>Multilingual learner participation</li><li>Establishing a testing schedule</li></ul></h4>",
        },
        {
          coords: { lat: 40.86668248589915, lng: -74.10712851732225 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Wallington Boro School District",
        },
        {
          coords: { lat: 40.878101378593, lng: -74.09599906201974 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Westwood Regional School District",
        },
        {
          coords: { lat: 40.042369128907026, lng: -74.82235349114056 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Burlington County Institute of Technology School District",
        },
        {
          coords: { lat: 40.01599447223468, lng: -74.98038589362007 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Cinnaminson Township School District",
        },
        {
          coords: { lat: 40.03895086591605, lng: -74.95244882699488 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Delran Township School District",
        },
        {
          coords: { lat: 39.83888604952979, lng: -74.7354437577303 },
          iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
            },
          content: "<h3>Lenape Regional High School District</h3><h4>Contact: Shannon Bretz<br>Email: sbretz@lrhsd.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
            },
        {
          coords: { lat: 39.968799763807866, lng: -74.98685159011076 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Maple Shade School District",
        },
        {
          coords: { lat: 39.9935479449282, lng: -74.93721673188162 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Moorestown Township Public School District",
        },
        {
          coords: { lat: 40.09091133292088, lng: -74.66068399072252 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Northern Burlington County Regional School District",
        },
        {
          coords: { lat: 40.00914140931774, lng: -74.78249922875061 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Rancocas Valley Regional High School District",
        },
        {
          coords: { lat: 40.03687665641072, lng: -74.95946589842971 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Riverside Township School District",
        },
        {
          coords: { lat: 39.891661459547755, lng: -75.07073238762511 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Audubon Public School District",
        },
        {
          coords: { lat: 39.795740643469685, lng: -75.0499466162124 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Black Horse Pike Regional School District</h3><h4>Contact:Gail Shelly<br>Email:gshelly@bhprsd.org<br>Offers assistance with:<br><ul> <li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li> </ul></h4>",
        },
        {
          coords: { lat: 39.94499915389076, lng: -75.11968153606539 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Camden City School District",
        },
        {
          coords: { lat: 39.942529464047404, lng: -75.06468094675036 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Camden County Technical School District</h3><h4>Contact: Matt Ciociola<br>Email: mciociola@ccts.net<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Establishing a testing schedule</li></ul></h4>",
        },
        {
          coords: { lat: 39.90981995424433, lng: -75.00321122804776 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Cherry Hill School District</h3><h4>Contact: Nora Smaldore<br>Email: nsmaldore@chclc.org<br>Offers assistance with:<br><ul><li>Latin</li><li>Establishing a testing schedule</li></ul></h4>",
        },
        {
          coords: { lat: 39.914508807667424, lng: -75.06741276021316 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Collingswood Public School District",
        },
        {
          coords: { lat: 39.84343365411478, lng: -74.95560357380995 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Eastern Camden County Regional School District</h3><h4>Contact: Dr. Robyn Clarke<br>Email: rclarke@eccrsd.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
        },
        {
          coords: { lat: 39.891512725897684, lng: -75.12517604767517 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Gloucester City Public School District",
        },
        {
          coords: { lat: 39.957059864664146, lng: -75.11373860274321 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Mastery Schools of Camden, Inc.",
        },
        {
          coords: { lat: 39.92103524833153, lng: -75.02961488946207 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Haddonfield School District</h3><h4>Contact: Daniel Licata<br>Email: dlicata@haddonfield.k12.nj.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Assessing students in multiple languages</li></ul></h4>",
        },
        {
          coords: { lat: 39.80431966335915, lng: -74.98134066979938 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Pine Hill School District",
        },
        {
          coords: { lat: 39.85988094881019, lng: -75.02097468546344 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Sterling Regional School District",
        },
        {
          coords: { lat: 39.69172504255315, lng: -74.85478537128921 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Winslow Township School District",
        },
        {
          coords: { lat: 39.150489007708615, lng: -74.78554195856583 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Cape May County Technical High School District",
        },
        {
          coords: { lat: 39.002347071008025, lng: -74.8945968615425 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Lower Cape May Regional School District",
        },
        {
          coords: { lat: 39.14127480489813, lng: -74.83278848729621 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Middle Township Public School District",
        },
        {
          coords: { lat: 39.31055153811807, lng: -74.59540669146446 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Ocean City School District",
        },
        {
          coords: { lat: 39.02220471345408, lng: -74.82268513635057 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Wildwood City School District</h3><h4>Contact: Josepha Penrose<br>Email: jpenrose@wwschools.org<br>Offers assistance with:<br><ul><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li></ul></h4>",
        },
        {
          coords: { lat: 39.467745879571176, lng: -75.22030188335383 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Bridgeton City School District",
        },
        {
          coords: { lat: 39.48051418043734, lng: -75.04490746983299 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Cumberland County Board of Vocational Education",
        },
        {
          coords: { lat: 39.41702945150413, lng: -75.27069939610325 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Cumberland Regional School District",
        },
        {
          coords: { lat: 39.509467986294545, lng: -74.96490664285822 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Vineland Public School District",
        },
        {
          coords: { lat: 39.509467986294545, lng: -74.96490664285822 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Vineland Public School District</h3><h4>Contact: JoAnne Negrin<br>Email: jnegrin@vineland.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li><li>Assessing students in multiple languages</li></ul></h4>          ",
        },
        {
          coords: { lat: 40.80844007567748, lng: -74.1668461711342 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Belleville Public School District",
        },
        {
          coords: { lat: 40.81702326227521, lng: -74.18530398997117 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Bloomfield Township School District",
        },
        {
          coords: { lat: 40.85152792278879, lng: -74.29345419311765 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Caldwell-West School District",
        },
        {
          coords: { lat: 40.77646114561684, lng: -74.20740625295751 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>East Orange School District</h3><h4>Contact:Denise Vega-Moore<br>Email:denise.vega-moore@eastorange.k12.nj.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Celebrating students</li></ul></h4>",
        },
        {
          coords: { lat: 40.86045177347419, lng: -74.28900364551649 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Essex County Schools of Technology</h3><h4>Contact: Anibal Ponce<br>Email: aponce@essextech.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
        },
        {
          coords: { lat: 40.8104256539307, lng: -74.20400468414512 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Glen Ridge Public School District</h3><h4>Contact: John Lawlor<br>Email: jlawlor@glenridge.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
        },
        {
          coords: { lat: 40.746287987129065, lng: -74.21730896967203 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
            },
            content: "<h3>Irvington Public School District</h3><h4>Contact: Pedro Ruiz<br>Email:  pruiz@irvington.k12.nj.us<br>Offers assistance with:<br><ul><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Assessing students in multiple languages</li></ul></h4>",
            },
        {
          coords: { lat: 40.79655053351782, lng: -74.33870539872021 },
          iconImage: {
            url:
              "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Livingston Board of Education School District</h3><h4>Contact: Alexandra Marzulla<br>Email: amarzulla@livingston.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
        },
        {
          coords: { lat: 40.73648313310967, lng: -74.32418348656589 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Millburn Township School District",
        },
        {
          coords: { lat: 40.73739280645564, lng: -74.32212277335294 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Montclair Public School District",
        },
        {
          coords: { lat: 40.73616294171966, lng: -74.18253888390171 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Newark Public School District",
        },
        {
          coords: { lat: 40.82930187554287, lng: -74.15846172850877 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Nutley Public School District",
        },
        {
          coords: { lat: 40.77384422625383, lng: -74.24720054279486 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Orange Board Of Education School District",
        },
        {
          coords: { lat: 40.750527895784565, lng: -74.2715547085981 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "South Orange-Maplewood School District",
        },
        {
          coords: { lat: 40.85084331233336, lng: -74.25220062560328 },
          iconImage: {
            url:
              "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Verona Public School District</h3><h4>Contact:Julia Peter<br>Email:jpeter@veronaschools.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
        },
        {
          coords: { lat: 40.89669063927171, lng: -74.30297903352533 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "West Essex Regional School District",
        },
        {
          coords: { lat: 40.7975071480868, lng: -74.25151405104405 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "West Orange Public Schools",
        },
        {
          coords: { lat: 39.768470143044595, lng: -75.2889011859662 },
          iconImage: {
            url:
              "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Kingsway Regional School District</h3><h4>Contact: Rachael Anderson<br>Email: andersonr@krsd.us<br>Offers assistance with:<br><ul> <li>Multilingual learner participation</li><li>Establishing a testing schedule</li> </ul></h4>",
        },
        {
          coords: { lat: 39.69794199895339, lng: -74.98354087076243 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Monroe Township Public School District",
        },
       
        {
          coords: { lat: 39.76134408745302, lng: -75.14453689873672 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Pitman Boro School District",
        },
        {
          coords: { lat: 39.65150446724898, lng: -75.06362207364724 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Delsea Regional High School District",
        },
        {
          coords: { lat: 39.79526177914237, lng: -75.06586893179588 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Washington Township School District",
        },
        {
          coords: { lat: 39.83690901450158, lng: -75.08157823371069 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "West Deptford Township School District",
        },
        {
          coords: { lat: 39.87717113620701, lng: -75.14604116123631 },
          iconImage: {
            url:
              "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Woodbury City Public School District</h3><h4>Contact:Vince Gravina<br> Email:vgravina@woodburysch.com<br>Offers assistance with:<br><ul> <li>Equitable access</li> </ul></h4>",
        },
        {
          coords: { lat: 40.68126758157329, lng: -74.11856588945382 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Bayonne School District",
        },
        {
          coords: { lat: 40.75294834427248, lng: -74.15860228708979 },
          iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
            },
          content: "<h3>Harrison School District</h3><h4>Contact: Matt Weber<br>Email: matthew.weber@staff.harrisonschools.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li><li>Assessing students in multiple languages</li></ul></h4>",
            },
        {
          coords: { lat: 40.76327099648935, lng: -74.03067137373046 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Hoboken Public School District",
        },
        {
          coords: { lat: 40.76876861753408, lng: -74.08278451641054 },
          iconImage: {
            url:
              "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Hudson County Schools of Technology School District",
        },
        {
          coords: { lat: 40.72662308370435, lng: -74.0692470054697 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Jersey City Public Schools",
        },
        {
          coords: { lat: 40.77849229480167, lng: -74.13993600763428 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Kearny",
        },
        {
          coords: { lat: 40.8184657601797, lng: -74.02187663017756 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "North Bergen School District",
        },
        {
        coords: { lat: 40.78996011480711, lng: -74.07033129513373 },
        iconImage: {
        url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
        scaledSize: new google.maps.Size(30, 30),
        },
        content: "<h3>Secaucus School District</h3><h4>Contact: Christina Wiswesser <br>Email: Cwiswesser@sboe.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",																									
        },
        {
          coords: { lat: 40.401867800994665, lng: -74.39014655576418 },
          iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "<h3>Spotswood Public Schools</h3><h4>Contact: Lauren Buchanan<br>Email: lbuchanan@spsd.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",																									
          },
          {
            coords: { lat: 40.90034815532847, lng: -74.01374358407939 },
            iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
            },
            content: "<h3>Teaneck School District</h3><h4>Contact: Justin O'Neill<br>Email: joneill@teaneckschools.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Celebrating students</li></ul></h4>",																									
            },
            {
              coords: { lat: 40.01115208909335, lng: -74.19410830535868 },
              iconImage: {
              url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "<h3>Toms River Regional School District</h3><h4>Contact: Ann C Gural<br>Email: agural@trschools.com<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Less commonly taught languages</li><li>Multilingual learner participation</li><li>Celebrating students</li></ul></h4>",																									
              },
              {
                coords: { lat: 39.7986961908683, lng: -75.06858643627787 },
                iconImage: {
                url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                scaledSize: new google.maps.Size(30, 30),
                },
                content: "<h3>Washington Township School District</h3><h4>Contact: Kayla Berry<br>Email: kberry@wtps.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li></ul></h4>",																									
                },
        {
          coords: { lat: 40.79451212508365, lng: -74.02615466937655 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Union City School District",
        },
        {
          coords: { lat: 40.78409435005601, lng: -74.02295030593956 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Weehawken Public School District",
        },
        {
          coords: { lat: 40.802171591157034, lng: -74.0069839968257 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "West New York School District",
        },
        {
          coords: { lat: 40.5764518806563, lng: -75.0364332009538 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Delaware Valley Regional High School District</h3><h4>Contact: Debra Billmann<br>Email: debrabillmann@dvrhs.k12.nj.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Assessing students in multiple languages</li></ul></h4>",
        },
        {
          coords: { lat: 40.39032290452445, lng: -74.9168686298011 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "South Hunterdon Regional School District",
        },
        {
          coords: { lat: 40.5163930908511, lng: -74.84782085415375 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Hunterdon Central Regional High School District",
        },
        {
          coords: { lat: 40.54876329174321, lng: -74.85568977670476 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Hunterdon County Vocational School District",
        },
        {
          coords: { lat: 40.66470208450976, lng: -74.91988111301919 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "North Hunterdon-Voorhees Regional High School District",
        },
        {
          coords: { lat: 40.273373066907425, lng: -74.53595526429699 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "East Windsor Regional School District",
        },
        {
          coords: { lat: 40.24540403148778, lng: -74.6694881207441 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Hamilton Township Public School District",
        },
        {
          coords: { lat: 40.34470658861669, lng: -74.80391959073421 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Hopewell Valley Regional School District",
        },
        {
          coords: { lat: 40.2847551076904, lng: -74.7250927590928 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Lawrence Township Public School District",
        },
        {
          coords: { lat: 40.257181230115535, lng: -74.65651576687875 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Area Vocational Technical School District of Mercer County",
        },
        {
          coords: { lat: 40.241406390991266, lng: -74.76174615892337 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Trenton Public School District",
        },
        {
          coords: { lat: 40.27966439252077, lng: -74.59867051870032 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>West Windsor-Plainsboro Regional School District</h3><h4>Contact:Ashley Warren<br>Email:ashley.warren@wwprsd.org<br>Offers assistance with:<br><ul><li>Equitable access</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li></ul></h4>",
        },
        {
          coords: { lat: 40.591275022945915, lng: -74.22250679724947 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Carteret Public School District",
        },
        {
          coords: { lat: 40.59466604643908, lng: -74.47154659025604 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Dunellen Public School District",
        },
        {
          coords: { lat: 40.43269096759514, lng: -74.43796631546766 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "East Brunswick Township School District",
        },
        {
          coords: { lat: 40.52588035417888, lng: -74.39375125060444 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Edison Township School District",
        },
        {
          coords: { lat: 40.241406390991266, lng: -74.76174615892337 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Trenton Public School District",
        },
        {
          coords: { lat: 40.27966439252077, lng: -74.59867051870032 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "West Windsor-Plainsboro Regional School District",
        },
        {
          coords: { lat: 40.591275022945915, lng: -74.22250679724947 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Carteret Public School District",
        },
        {
          coords: { lat: 40.59466604643908, lng: -74.47154659025604 },
          iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",			
            scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Dunellen Public Schools</h3><h4>Contact: Meagan Drapkin<br>Email: drapkinm@dunellenschools.org<br>Offers assistance with:<br><ul><li>Establishing a testing schedule</li></ul></h4>",																									
        },
        {
          coords: { lat: 40.43269096759514, lng: -74.43796631546766 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "East Brunswick Township School District",
        },
        {
          coords: { lat: 40.52588035417888, lng: -74.39375125060444 },
          iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
          },
          content: "Edison Township School District",
        },
        {
          coords: { lat: 40.539253051477075, lng: -74.35556028393852 },
          iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Metuchen Public School District</h3><h4>Contact:Ashley Jaye<br>Email:ajaye@metboe.k12.nj.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li></ul></h4>",
          },
          {
          coords: { lat: 40.58070336798981, lng: -74.50728677211173 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "Middlesex Borough School District",
          },
          {
          coords: { lat: 40.42422931919484, lng: -74.38592933566514 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "Middlesex County Vocational and Technical School District",
          },
          {
          coords: { lat: 40.32034857838921, lng: -74.43944030490664 },
          iconImage: {
          url: "https://i.ibb.co/47MDzzT/Image-with-Scarlet-Red-Circle-removebg.png",
          scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>Monroe Township School District</h3><h4>Contact:Kelly Roselle<br>Email: kelly.roselle@monroe.k12.nj.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Multilingual learner participation</li></ul></h4>",
          },
          {
          coords: { lat: 40.494707811048244, lng: -74.44654384177319 },
          iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>New Brunswick School District</h3><h4>Contact: Marisa Santos<br>Email: marisa_santos@nbpsnj.net<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Multilingual learner participation</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
          },
          {
          coords: { lat: 40.456258289931235, lng: -74.47441195538723 },
          iconImage: {
          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
          scaledSize: new google.maps.Size(80, 52),
          },
          content: "<h3>North Brunswick Township School District</h3><h4>Contact: Yesenia Morales<br>Email: ymorales@nbtschools.org<br>Offers assistance with:<br><ul><li>Equitable access</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
          },
          {
            coords: { lat: 40.397373273366924, lng: -74.33514635218236 },
            iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
            },
            content: "<h3>Old Bridge Township School District</h3><h4>Contact: Anahita Keiller<br>Email: akeiller@obps.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Less commonly taught languages</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li><li>Writing/keyboards for non-romanized alphabets</li><li>Assessing students in multiple languages</li></ul></h4>",
          },
          {
          coords: { lat: 40.39353144914743, lng: -74.33487119452214 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "Old Bridge Township School District",
          },
          {
          coords: { lat: 40.527511432638036, lng: -74.26931318449601 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "Perth Amboy Public School District",
          },
          {
          coords: { lat: 40.56105693968063, lng: -74.4629386635669 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "Piscataway Township School District",
          },
          {
          coords: { lat: 40.4622094039383, lng: -74.34694253675235 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "Sayreville School District",
          },
          {
          coords: { lat: 40.48739499220154, lng: -74.28259287703023 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "South Amboy School District",
          },
          {
          coords: { lat: 40.37971804340337, lng: -74.52413001436774 },
          iconImage: {
          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
          scaledSize: new google.maps.Size(30, 30),
          },
          content: "South Brunswick School District",
          },
          {
            coords: { lat: 40.57683308928872, lng: -74.41980036037057 },
            iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
            },
            content: "South Plainfield School District",
            },
            {
            coords: { lat: 40.44042417947539, lng: -74.37613071238738 },
            iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
            },
            content: "<h3>South River Public School District</h3><h4>Contact: Gabriela Colon<br>Email: GCOLON@SRIVERNJ.ORG<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li></ul></h4>",
            },
            {
            coords: { lat: 40.39470895152772, lng: -74.38868563753992 },
            iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
            },
            content: "Spotswood Public School District",
            },
            {
            coords: { lat: 40.55450811190757, lng: -74.29965962059079 },
            iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
            },
            content: "Woodbridge Township School District",
            },
            {
            coords: { lat: 40.244011781595745, lng: -74.00681719694744 },
            iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
            },
            content: "Asbury Park School District",
            },
            {
            coords: { lat: 40.25199009404773, lng: -74.26176226393643 },
            iconImage: {
            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
            scaledSize: new google.maps.Size(80, 52),
            },
            content: "<h3>Freehold Regional High School District</h3><h4>Contact: Shanna Howell<br>Email: Showell@frhsd.com<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li></ul></h4>",																									
            },
            {
            coords: { lat: 40.4212637458875, lng: -73.9987245892393 },
            iconImage: {
            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
            scaledSize: new google.maps.Size(30, 30),
            },
            content: "Henry Hudson Regional School District",
            },
            {
              coords: { lat: 40.38480707410566, lng: -74.18178668290545 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "Holmdel Township School District",
              },
              {
              coords: { lat: 40.43852594454467, lng: -74.20222485763874 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "Keyport School District",
              },
              {
              coords: { lat: 40.3178741796009, lng: -73.99718376628019 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "LONG BRANCH PUBLIC SCHOOL District",
              },
              {
              coords: { lat: 40.140623022494964, lng: -74.05055655724496 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "Manasquan School District",
              },
              {
              coords: { lat: 40.42883036139859, lng: -74.23054666988347 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "Matawan-Aberdeen Regional School District",
              },
              {
              coords: { lat: 40.40521742150962, lng: -74.09112552235713 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "Middletown Township Public School District",
              },
              {
              coords: { lat: 40.29042838235365, lng: -74.27695976426907 },
              iconImage: {
              url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
              scaledSize: new google.maps.Size(80, 52),
              },
              content: "<h3>Monmouth County Vocational School District</h3><h4>Contact: Kelly Harmon<br>Email: kharmon@ctemc.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li></ul></h4>",
              },
              {
              coords: { lat: 40.313258906186825, lng: -74.08948373238876 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "<h3>Monmouth Regional High School</h3><h4>Contact:Victoria Mercogliano<br>Email:vmercogliano@monmouthregional.net<br>Offers assistance with:<br><ul> <li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li> </ul></h4>",
              },
              {
              coords: { lat: 40.23094070092471, lng: -74.07257709230515 },
              iconImage: {
              url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
              scaledSize: new google.maps.Size(30, 30),
              },
              content: "Neptune Township School District",
              },
              {
                coords: { lat: 40.26932410693579, lng: -74.04240610516295 },
                iconImage: {
                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                scaledSize: new google.maps.Size(30, 30),
                },
                content: "Township of Ocean School District",
              },
              {
                  coords: { lat: 40.341432646129014, lng: -74.04830934106276 },
                  iconImage: {
                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                  scaledSize: new google.maps.Size(30, 30),
                  },
                  content: "Red Bank Regional School District",
              },
              {
                  coords: { lat: 40.38750862695924, lng: -74.00795432460023 },
                  iconImage: {
                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                  scaledSize: new google.maps.Size(30, 30),
                  },
                  content: "Rumson-Fair Haven Regional High School District",
              },
              {
                  coords: { lat: 40.320005487060705, lng: -74.02222613139968 },
                  iconImage: {
                  url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                  scaledSize: new google.maps.Size(80, 52),
                  },
                  content: "<h3>Shore Regional High School District</h3><h4>Contact: Ellen Minze<br>Email: eminze@shoreregional.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
              },
              {
                  coords: { lat: 40.18110421647721, lng: -74.52461627151287 },
                  iconImage: {
                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                  scaledSize: new google.maps.Size(30, 30),
                  },
                  content: "Upper Freehold Regional School District",
              },
              {
                  coords: { lat: 40.17305437357603, lng: -74.0876224331545 },
                  iconImage: {
                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                  scaledSize: new google.maps.Size(30, 30),
                  },
                  content: "Wall Township Public School District",
              },
              {
                  coords: { lat: 41.01212864994346, lng: -74.33855849010243 },
                  iconImage: {
                  url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                  scaledSize: new google.maps.Size(80, 52),
                  },
                  content: "<h3>Butler Public School District</h3><h4>Contact: Suzanne Greco<br>Email: sgreco@butlerboe.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
              },
              {
                  coords: { lat: 40.73420421531987, lng: -74.41787640190587 },
                  iconImage: {
                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                  scaledSize: new google.maps.Size(30, 30),
                  },
                  content: "School District of the Chathams",
              },
              {
                  coords: { lat: 40.91217378106681, lng: -74.56100051914733 },
                  iconImage: {
                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                  scaledSize: new google.maps.Size(30, 30),
              },
                  content: "Dover Public School District",
              },
              {
                coords: { lat: 41.064576536883884, lng: -74.13659980526819 },
                iconImage: {
                url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                scaledSize: new google.maps.Size(80, 52),
                },
                content: "<h3>Ramsey Borough School District</h3><h4>Contact: Brennan Heffernan<br>Email: bheffernan@ramsey.k12.nj.us<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
                },
              {
                    coords: { lat: 40.81390932376928, lng: -74.39593225940044 },
                    iconImage: {
                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                    scaledSize: new google.maps.Size(30, 30),
                    },
                    content: "Hanover Park Regional High School District",
                    },
                    {
                    coords: { lat: 40.99822485767031, lng: -74.38570170269196 },
                    iconImage: {
                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                    scaledSize: new google.maps.Size(30, 30),
                    },
                    content: "Kinnelon School District",
                    },
                    {
                    coords: { lat: 40.77416399101145, lng: -74.40746600688936 },
                    iconImage: {
                    url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                    scaledSize: new google.maps.Size(80, 52),
                    },
                    content: "<h3>Madison Public School District</h3><h4>Contact: Christine Internicola<br>Email: internicolac@madisonnjps.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
                    },
                    {
                    coords: { lat: 40.93522113962187, lng: -74.3665953014933 },
                    iconImage: {
                    url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                    scaledSize: new google.maps.Size(80, 52),
                    },
                    content: "<h3>Montville Township School District</h3><h4>Contact:Tamar Spitzer<br>Email:tamar.spitzer@montville.net<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Assessing students in multiple languages</li></ul></h4>",
                    },
                    {
                    coords: { lat: 40.9016412916122, lng: -74.46869790124147 },
                    iconImage: {
                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                    scaledSize: new google.maps.Size(30, 30),
                    },
                    content: "Morris County Vocational School District",
                    },
                    {
                    coords: { lat: 40.95226305371898, lng: -74.5195597802329 },
                    iconImage: {
                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                    scaledSize: new google.maps.Size(30, 30),
                    },
                    content: "Morris Hills Regional School District",
                    },
                    {
                    coords: { lat: 40.94185487121545, lng: -74.52097759622716 },
                    iconImage: {
                    url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                    scaledSize: new google.maps.Size(80, 52),
                    },
                    content: "<h3>Morris School District</h3><h4>Contact: Marietta Scorsune<br>Email: marietta.scorsune@msdk12.net<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Administering assessments and/or multiple assessments</li></ul></h4>",
                    },
                    {
                    coords: { lat: 40.866571745419726, lng: -74.73639013998127 },
                    iconImage: {
                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                    scaledSize: new google.maps.Size(30, 30),
                    },
                    content: "Mount Olive Township School District",
                    },
                    {
                      coords: { lat: 40.86964185477286, lng: -74.41772603340839 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "Parsippany-Troy Hills Township School District",
                      },
                      {
                      coords: { lat: 40.970712128381535, lng: -74.30042742095996 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "Pequannock Township School District",
                      },
                      {
                      coords: { lat: 40.85501916318234, lng: -74.57402937466297 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "Randolph Township School District",
                      },
                      {
                      coords: { lat: 40.87394311533862, lng: -74.66551891832295 },
                      iconImage: {
                      url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                      scaledSize: new google.maps.Size(80, 52),
                      },
                      content: "<h3>Roxbury Township School District</h3><h4>Contact: Matt Trokan<br>Email: mtrokan@roxbury.org<br>Offers assistance with:<br><ul><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li><li>Assessing students in multiple languages</li></ul></h4>",
                      },
                      {
                      coords: { lat: 40.79328345750715, lng: -74.6644907067642 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "West Morris Regional High School District",
                      },
                      {
                      coords: { lat: 39.74615508174535, lng: -74.23069808556289 },
                      iconImage: {
                      url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                      scaledSize: new google.maps.Size(80, 52),
                      },
                      content: "<h3>Barnegat Township School District</h3><h4>Contact:Krystina Ozello<br>Email:kozello@barnegatschools.com<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Celebrating students</li></ul></h4>",
                      },
                      {
                      coords: { lat: 39.761836197514434, lng: -74.23962312978747 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "Brick Township Public School District",
                      },
                      {
                      coords: { lat: 40.09892109608659, lng: -74.3566787491482 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "Jackson Township School District",
                      },
                      {
                      coords: { lat: 40.08357169824124, lng: -74.20653342978639 },
                      iconImage: {
                      url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                      scaledSize: new google.maps.Size(30, 30),
                      },
                      content: "Lakewood Township School District",
                      },
                      {
                        coords: { lat: 39.960647370908006, lng: -74.38322941419695 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Manchester Township School District",
                        },
                        {
                        coords: { lat: 39.98998096219055, lng: -74.19387218071066 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Ocean County Vocational Technical School District",
                        },
                        {
                        coords: { lat: 40.08124017149508, lng: -74.07010078980335 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Point Pleasant Borough School District",
                        },
                        {
                        coords: { lat: 40.09642084137515, lng: -74.0472219009297 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Point Pleasant Beach School District",
                        },
                        {
                          coords: { lat: 40.96933751783287, lng: -74.3000885994551 },
                          iconImage: {
                            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                            scaledSize: new google.maps.Size(80, 52),
                          },
                          content: "<h3>Pequannock Township School District</h3><h4>Contact: Elizabeth Sheridan<br>Email: elizabeth.sheridan@pequannock.org<br>Offers assistance with:<br><ul> <li>Establishing a testing schedule</li></ul></h4>",
                        },
                        {
                          coords: { lat: 40.561428015914565, lng: -74.46335134754496 },
                          iconImage: {
                            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                            scaledSize: new google.maps.Size(80, 52),
                          },
                          content: "<h3>Piscataway Township School District</h3><h4>Contact: Glennysha Jurado-Moran<br>Email: gjurado-moran@pway.org<br>Offers assistance with:<br><ul> <li>Establishing a testing schedule</li></ul></h4>",
                        },
                        {
                        coords: { lat: 39.752883595102254, lng: -74.24934952850631 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Southern Regional School District",
                        },
                        {
                        coords: { lat: 40.026405304959376, lng: -74.20091913090708 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Toms River Regional School District",
                        },
                        {
                        coords: { lat: 40.890451346810394, lng: -74.15472161261886 },
                        iconImage: {
                        url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                        scaledSize: new google.maps.Size(80, 52),
                        },
                        content: "<h3>Clifton Public School District</h3><h4>Contact: Maria Jaume-Aponte<br>Email: mjaume-aponte@cliftonschools.net<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Less commonly taught languages</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li><li>Writing/keyboards for non-romanized alphabets</li><li>Assessing students in multiple languages</li></ul></h4>",
                        },
                        {
                        coords: { lat: 40.890451346810394, lng: -74.15472161261886 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Hawthorne Public School District",
                        },
                        {
                        coords: { lat: 40.98688556199685, lng: -74.1470197581555 },
                        iconImage: {
                        url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                        scaledSize: new google.maps.Size(30, 30),
                        },
                        content: "Passaic City School District",
                        },
                        {
                          coords: { lat: 40.958614617862516, lng: -74.18438579731337 },
                          iconImage: {
                          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                          scaledSize: new google.maps.Size(80, 52),
                          },
                          content: "<h3>Passaic County Manchester Regional High School District</h3><h4>Contact:Jonathan Banta<br>Email:JBanta@mrhs.net<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Writing/keyboards for non-romanized alphabets</li></ul></h4>",
                        },
                        {
                          coords: { lat: 40.89733409781616, lng: -74.21608267696493 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "Passaic Valley Regional High School District",
                        },
                        {
                          coords: { lat: 40.95327405155227, lng: -74.20193689843677 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "Passaic County Technical-Vocational School District",
                          },
                          {
                          coords: { lat: 40.932632065145555, lng: -74.16291850520663 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "Paterson Public School District",
                          },
                          {
                          coords: { lat: 41.02687299265066, lng: -74.2848922763208 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "Pompton Lakes School District",
                          },
                         
                          {
                          coords: { lat: 41.15067203135409, lng: -74.36421050369893 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "West Milford Township Public School District",
                          },
                          {
                          coords: { lat: 39.75716551746929, lng: -75.48140124685807 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "Penns Grove-Carneys Point Regional School District",
                          },
                          {
                          coords: { lat: 40.670088394144635, lng: -74.55658246744449 },
                          iconImage: {
                          url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                          scaledSize: new google.maps.Size(80, 52),
                          },
                          content: "<h3>Bernards Township School District</h3><h4>Contact: Katherine Stotler<br>Email: kstotler@bernardsboe.com<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>American Sign Language</li><li>Latin</li><li>Less commonly taught languages</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Writing/keyboards for non-romanized alphabets</li><li>Assessing students in multiple languages</li></ul></h4>",
                          },
                          {
                          coords: { lat: 40.57124617407304, lng: -74.53623173861077 },
                          iconImage: {
                          url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                          scaledSize: new google.maps.Size(30, 30),
                          },
                          content: "Bound Brook School District",
                          },
                          {
                            coords: { lat: 40.59713106789441, lng: -74.60555358608686 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Bridgewater-Raritan Regional School District",
                            },
                            {
                            coords: { lat: 40.60405954355154, lng: -74.56968705536019 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Franklin Township Public School District",
                            },
                            {
                            coords: { lat: 40.51602504195157, lng: -74.66284260360815 },
                            iconImage: {
                            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                            scaledSize: new google.maps.Size(80, 52),
                            },
                            content: "<h3>Hillsborough Township Public School District</h3><h4>Contact: Roberto Lugo<br>Email: rlugo@htps.us<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li><li>Assessing students in multiple languages</li></ul></h4>",
                            },
                            {
                            coords: { lat: 40.51602499738746, lng: -74.66455977627027 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Manville School District",
                            },
                            {
                            coords: { lat: 40.439617625268724, lng: -74.66395381841734 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Montgomery Township School District",
                            },
                            {
                            coords: { lat: 40.635851032621375, lng: -74.42800749692856 },
                            iconImage: {
                            url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                            scaledSize: new google.maps.Size(80, 52),
                            },
                            content: "<h3>North Plainfield School District</h3><h4>Contact: Regina Acevedo<br>Email: regina_acevedo@nplainfield.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Multilingual learner participation</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
                            },
                            {
                            coords: { lat: 40.593287598766, lng: -74.60433851609754 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Somerset County Vocational and Technical School District",
                            },
                            {
                            coords: { lat: 40.71650723264802, lng: -74.60675876571192 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Somerset Hills Regional School District",
                            },
                            {
                            coords: { lat: 40.575399116931486, lng: -74.61416362987345 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Somerville Public School District",
                            },
                            {
                            coords: { lat: 40.65569713743138, lng: -74.47670672207876 },
                            iconImage: {
                            url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                            scaledSize: new google.maps.Size(30, 30),
                            },
                            content: "Watchung Hills Regional High School District",
                            },
                            {
                              coords: { lat: 40.65726253998166, lng: -74.47739149900188 },
                              iconImage: {
                              url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                              scaledSize: new google.maps.Size(80, 52),
                              },
                              content: "<h3>High Point Regional High School District</h3><h4>Contact: Jacqueline McCarthy<br>Email: jmccarthy@hpregional.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li></ul></h4>",
                              },
                              {
                              coords: { lat: 40.93681018797909, lng: -74.67213522794624 },
                              iconImage: {
                              url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                              scaledSize: new google.maps.Size(80, 52),
                              },
                              content: "<h3>Hopatcong Borough School District</h3><h4>Contact: Stephanie Martinez<br>Email: smartinez@hopatcongschools.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform curriculum and instructional programming</li></ul></h4>",
                              },
                              {
                                coords: { lat: 40.936280374858335, lng: -74.69307576164533 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Lenape Valley Regional High School District",
                                },
                                {
                                coords: { lat: 41.069211579268035, lng: -74.63384650007886 },
                                iconImage: {
                                url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                                scaledSize: new google.maps.Size(80, 52),
                                },
                                content: "<h3>Sparta Township Public School District</h3><h4>Contact:Andrew Buchanan<br>Email:andrew.buchanan@sparta.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
                                },
                                {
                                  coords: { lat: 40.729471223735565, lng: -74.41670185658263 },
                                  iconImage: {
                                  url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                                  scaledSize: new google.maps.Size(80, 52),
                                  },
                                  content: "<h3>School District of the Chathams</h3><h4>Contact:Lauren Spooner<br>Email:lspooner@chatham-nj.org<br>Offers assistance with:<br><ul><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li></ul></h4>",
                                  },
                                
                                {
                                coords: { lat: 41.21523834992878, lng: -74.48027658203638 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Vernon Township School District",
                                },
                                {
                                coords: { lat: 41.225253701672, lng: -74.51524786442657 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Berkeley Heights School District",
                                },
                                {
                                coords: { lat: 40.6292152593221, lng: -74.31501463984978 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Clark Township Public School District",
                                },
                                {
                                coords: { lat: 40.667008308019035, lng: -74.3051667934842 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Cranford Public School District",
                                },
                                {
                                coords: { lat: 40.684311671149146, lng: -74.21545109683747 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Elizabeth Public Schools",
                                },
                                {
                                coords: { lat: 40.70813563300116, lng: -74.22046911463296 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Hillside Public School District",
                                },
                                {
                                coords: { lat: 40.68905550027146, lng: -74.28880696714789 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Kenilworth School District",
                                },
                                {
                                coords: { lat: 40.64483082916798, lng: -74.25813696659688 },
                                iconImage: {
                                url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                scaledSize: new google.maps.Size(30, 30),
                                },
                                content: "Linden Public School District",
                                },
                                {
                                  coords: { lat: 40.707189405123906, lng: -74.39906967091194 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "New Providence School District",
                                  },
                                  {
                                  coords: { lat: 40.61796192707205, lng: -74.41253443068511 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "Plainfield Public School District",
                                  },
                                  {
                                  coords: { lat: 40.61325176925103, lng: -74.28229450484311 },
                                  iconImage: {
                                  url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                                  scaledSize: new google.maps.Size(80, 52),
                                  },
                                  content: "<h3>Rahway Public School District</h3><h4>Contact: Jasmine Akauola<br>Email: jakauola@rahway.net<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Multilingual learner participation</li><li>Celebrating students</li><li>Using Seal of Biliteracy data to inform instruction</li></ul></h4>",
                                  },
                                  {
                                  coords: { lat: 40.66239677205066, lng: -74.27200815947353 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "Roselle Public School District",
                                  },
                                  {
                                  coords: { lat: 40.67591155107083, lng: -74.26337204718862 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "Roselle Park Public School District",
                                  },
                                  {
                                  coords: { lat: 40.627141141571514, lng: -74.3696015452985 },
                                  iconImage: {
                                  url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                                  scaledSize: new google.maps.Size(80, 52),
                                  },
                                  content: "<h3>Scotch Plains-Fanwood School District</h3><h4>Contact: Lisa Howard<br>Email: LHoward@spfk12.org<br>Offers assistance with:<br><ul><li>Promotion and/or recruiting</li><li>Equitable access</li><li>Administering assessments and/or multiple assessments</li><li>Establishing a testing schedule</li><li>Celebrating students</li><li>Assessing students in multiple languages</li></ul></h4>",
                                  },
                                  {
                                  coords: { lat: 40.70776502934746, lng: -74.3309132160864 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "Springfield Public School District",
                                  },
                                  {
                                  coords: { lat: 40.72079739925141, lng: -74.37900824109451 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "Summit Public School District",
                                  },
                                  {
                                  coords: { lat: 40.62242257281628, lng: -74.35738424467124 },
                                  iconImage: {
                                  url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                  scaledSize: new google.maps.Size(30, 30),
                                  },
                                  content: "Union County Vocational-Technical School District",
                                  },
                                  {
                                    coords: { lat: 40.66485981790389, lng: -74.33645310811316 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Westfield Public School District",
                                    },
                                    {
                                    coords: { lat: 40.661709219508104, lng: -74.35041028766186 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Warren Hills Regional School District",
                                    },
                                    {
                                    coords: { lat: 40.18717559669331, lng: -74.0321698809779 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Academy Charter High School",
                                    },
                                    {
                                    coords: { lat: 40.90180336353426, lng: -74.1215799942572 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Bergen Arts and Science Charter School",
                                    },
                                    {
                                    coords: { lat: 40.87666274092698, lng: -74.11671336361093 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Passaic Arts and Science Charter School",
                                    },
                                    {
                                    coords: { lat: 40.92559522710627, lng: -74.18262870177085 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Paterson Arts and Science Charter School",
                                    },
                                    {
                                    coords: { lat: 40.25003043309977, lng: -74.77537687386315 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Trenton Stem-to-Civics Charter School",
                                    },
                                    {
                                    coords: { lat: 39.98055380899516, lng: -75.10598945005233 },
                                    iconImage: {
                                    url: "https://i.ibb.co/ZJ47NYj/Image-with-Scarlet-Red-Circle-removebg-preview.png",
                                    scaledSize: new google.maps.Size(80, 52),
                                      },
                                    content: "<h3>LEAP Academy University Charter School</h3><h4>Contact: Tugba Hoguet<br>Email: Tugba@leap.rutgers.edu<br>Offers assistance with:<br><ul><li>Equitable access</li><li>Multilingual learner participation</li><li>Establishing a testing schedule</li><li>Celebrating students</li></ul></h4>",
                                      },
                                    {
                                    coords: { lat: 40.909687877275374, lng: -74.16100352007875 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Paterson Charter School for Science and Technology",
                                    },
    // 2023-2024 Newly Added
                                     {
                                    coords: { lat: 39.40119634987968, lng: -74.51084187762949 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Pleasantville Public School District",
                                    },

                                     {
                                    coords: { lat: 40.626118062091464, lng: -74.42556939269261 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "College Achieve Central Charter School",
                                    },

                                    {
                                    coords: { lat: 39.44306336255368, lng: -74.6964162841861 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Atlantic County Vocational School District",
                                    },

                                     {
                                    coords: { lat: 40.22205455297264, lng: -74.01009903368119 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Asbury Park School District",
                                    },

                                     {
                                    coords: { lat: 39.36944065712903, lng: -74.43520933463608},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Atlantic City School District",
                                    },

                                     {
                                    coords: { lat: 40.22220782991113, lng:-74.0227381092732},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Academy Charter High School",
                                    },

                                     {
                                    coords: { lat: 40.7120605500341, lng: -74.27547184575229 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Township of Union School District",
                                    },

                                     {
                                    coords: { lat: 40.907529842818796, lng: -74.4025235510676 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Boonton Town Public School District",
                                    },

                                    {
                                    coords: { lat: 40.95839816367277, lng: -74.05748605824937 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Bergen County Vocational Technical School District",
                                    },

                                     {
                                    coords: { lat: 40.86407521112128, lng: -73.99203078767766 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Leonia Public School District",
                                    },

                                    {
                                    coords: { lat: 39.820764536599405, lng: -74.9753838880581},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Lindenwold Public School District",
                                    },

                                    {
                                    coords: { lat: 40.75320311725578, lng: -74.16661367666755},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "North Star Academy Charter School",
                                    },

                                    {
                                    coords: { lat: 40.86285966019243, lng: -74.23028807457234 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Cedar Grove Township School District",
                                    },

                                    {
                                    coords: { lat: 40.89567210943956, lng: -74.43282601899261 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Mountain Lakes Public School District",
                                    },

                                     {
                                    coords: { lat: 40.05476297710012, lng: -74.84002443099966 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Burlington Township School District",
                                    },

                                     {
                                    coords: { lat: 40.961891074759, lng: -74.12976883056027 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Glen Rock Public School District",
                                    },

                                     {
                                    coords: { lat: 39.537127102332484, lng: -75.13128261335576 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Pittsgrove Township School District",
                                    },

                                     {
                                    coords: { lat: 40.52782839482203, lng: -74.52232716269847 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Thomas Edison EnergySmart Charter School",
                                    },

                                    {
                                    coords: { lat: 41.00370815269298, lng: -74.9901639930133 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "North Warren Regional School District",
                                    },

                                

                                     {
                                    coords: { lat: 39.95809190772923, lng: -74.61552146899918 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Pemberton Township School District",
                                    },

                                    

                                

                



                                     {
                                    coords: { lat: 40.851640729951825, lng: -74.83208583619503 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Hackettstown Public School District",
                                    },

                                    {
                                    coords: { lat: 40.89530238601542, lng: -74.04069909491861 },
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Bergen Arts and Science Charter School",
                                    },
 {
                                    coords: { lat: 41.01590246631104, lng: -74.12623427395177},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Waldwick School District",
                                    },

                                    {
                                    coords: { lat: 40.036088329968386, lng: -74.82442318928301},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Burlington County Institute of Technology School District",
                                    },
                                  
                                   {
                                    coords: { lat: 39.95794699480229, lng: -75.08574142085999},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Camden's Promise Charter School",
                                    },
                                      
                                       {
                                    coords: { lat: 39.90568859021639, lng: -75.05781619020289},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Haddon Township School District",
                                    },
                                          
                                   {
                                    coords: { lat: 39.93907121975755, lng: -75.1195638740771},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "KIPP: Cooper Norcross A New Jersey Nonprofit Corporation",
                                    },
             
                                   {
                                    coords: { lat: 39.37347621882313, lng: -75.05745122109175},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Millville School District",
                                    },
                                  {
                                    coords: { lat: 40.71137442153726, lng: -74.20277119160714},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "TEAM Academy Charter School",
                                    },

                                   {
                                    coords: { lat: 39.74491250749219, lng: -75.17909150018448},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Clearview Regional High School District",
                                    },
                                  {
                                    coords: { lat: 40.22420925651175, lng: -75.17909150018448},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Foundation Academy Charter School",
                                    },
        {
                                    coords: { lat: 39.74491250749219, lng: -74.77681745270294},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Robbinsville Public School District",
                                    },

        {
                                    coords: { lat: 40.232954227373824, lng: -74.78213781954184},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Trenton Stem-to-Civics Charter School",
                                    },

                          
        {
                                    coords: { lat: 39.622574599880615, lng: -74.35944350826746},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Pinelands Regional School District",
                                    },
                                {
                                    coords: { lat: 41.00423430430811, lng: -74.2850524396283},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Pompton Lakes School District",
                                    },
                                {
                                    coords: { lat: 41.00423430430811, lng: -74.2850524396283},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Salem County Vocational Technical School District",
                                    },
                                {
                                    coords: { lat: 41.10806966711919, lng: -74.76416189247813},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Kittatinny Regional School District",
                                    },
                                {
                                    coords: { lat: 40.920763720632706, lng: -74.69802876063548},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Lenape Valley Regional High School District",
                                    },
                                {
                                    coords: { lat: 41.05573711474651, lng: -74.75071745925369},
                                    iconImage: {
                                    url: "https://i.ibb.co/yd590gr/seal-of-biliteracy-removebg-preview.png",
                                    scaledSize: new google.maps.Size(30, 30),
                                    },
                                    content: "Newton Public School District",
                                    },
                              
                              
                              
                              



  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      // icon: props.iconImage
    });

    // Check for custom icon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }

    return marker;
  }

  const locationButton = document.getElementById('button');
  locationButton.textContent = 'Go to My Location';
  locationButton.classList.add("map-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(pos);
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
          });
          map.setZoom(10);
        }
      );
    }
  });

  Autocomplete(map);
}

// Auto Complete
function Autocomplete(map) {
  autocompleteInput = new google.maps.places.Autocomplete(document.getElementById("autocomplete"));
  autocompleteInput.bindTo("bounds", map);
  const auto_marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocompleteInput.addListener("place_changed", () => {
    auto_marker.setVisible(false);
    const place = autocompleteInput.getPlace();
    const position = place.geometry.location;
    if (!place.geometry || !place.geometry.location) {
      window.alert("No information found for " + place.name + ".");
    } else {
      if (!place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(position);
        map.setZoom(17);
      }
    }
    auto_marker.setPosition(position);
    auto_marker.setVisible(true);
  });
}

window.initMap = initMap;

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const product = document.querySelectorAll(".districts");

  for (var i = 0; i < product.length; i++) {
    let match = product[i].getElementsByTagName('h4')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};


