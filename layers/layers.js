function renderOrderer(a, b) {
    return a.get('TOTAL') - b.get('TOTAL');
  }

var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'Open Street Map (fondo)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap (fondo)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });


var format_Sudamericasudamerica_1 = new ol.format.GeoJSON();
var features_Sudamericasudamerica_1 = format_Sudamericasudamerica_1.readFeatures(json_Sudamericasudamerica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sudamericasudamerica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sudamericasudamerica_1.addFeatures(features_Sudamericasudamerica_1);
var lyr_Sudamericasudamerica_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sudamericasudamerica_1, 
                style: style_Sudamericasudamerica_1,
                popuplayertitle: 'Referencia Sudamérica',
                interactive: false,
                title: '<img src="styles/legend/Sudamericasudamerica_1.png" /> Referencia Sudamérica'
            });

//PROVINCIAS REFERENCIA
var format_Provincias = new ol.format.GeoJSON();
var features_Provincias = format_Provincias.readFeatures(json_Provincias, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias.addFeatures(features_Provincias);

var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias, 
                style: style_Provinciacopiar_2,
                popuplayertitle: 'Provincias',
                interactive: false,
                title: '<img src="styles/legend/Provinciacopiar_2.png" /> Provincias'
            });

// LOCALIDADES X IDIOMA
var format_Localidades = new ol.format.GeoJSON();
var features_Localidades = format_Localidades.readFeatures(
    json_Localidades_0,
    {dataProjection: 'EPSG:3857', featureProjection: 'EPSG:3857'});

//FUNCION PARA SELECCIONAR IDIOMA    
function filtrar_idioma(features, col_idioma) {
    return features.map(function (feature) {
        const props = feature.getProperties();
        const geom = feature.getGeometry();

        const hablantes = props[col_idioma];
        const total = props['TOTAL'];
        const porcentaje = (typeof hablantes === 'number' && typeof total === 'number' && total > 0)
            ? (100 * hablantes / total).toFixed(2)
            : 0;

        const columnas = {
            'Localidad': props['Localidad'],
            'Provincia': props['Provincia'],
            'TOTAL': total,
            'Hablantes': hablantes,
            'No Hablantes': props[col_idioma + 'No'],
            'Porcentaje (%)': porcentaje + ' %'
        };

        const newFeature = new ol.Feature({ geometry: geom });
        newFeature.setProperties(columnas);
        return newFeature;
    });
};




//WICHI
var features_IdiomaWich_3 = filtrar_idioma(features_Localidades, 'Wch');
var jsonSource_IdiomaWich_3 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaWich_3.addFeatures(features_IdiomaWich_3);

var lyr_IdiomaWich_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaWich_3, 
                style: style_IdiomaWich_3,
                popuplayertitle: 'Idioma Wichí',
                interactive: true,
                title: 'Idioma Wichí',
                renderOrder: renderOrderer
            });

//TOBA QOM
var features_IdiomaTobaQom_4 = filtrar_idioma(features_Localidades, 'Tob');
var jsonSource_IdiomaTobaQom_4 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaTobaQom_4.addFeatures(features_IdiomaTobaQom_4);

var lyr_IdiomaTobaQom_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaTobaQom_4, 
                style: style_IdiomaTobaQom_4,
                popuplayertitle: 'Idioma Toba (Qom)',
                interactive: true,
                title: 'Idioma Toba (Qom)',
                renderOrder: renderOrderer
            });

//QUECHUA
var features_IdiomaQuechua_5 = filtrar_idioma(features_Localidades, 'Qu');
var jsonSource_IdiomaQuechua_5 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaQuechua_5.addFeatures(features_IdiomaQuechua_5);

var lyr_IdiomaQuechua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaQuechua_5, 
                style: style_IdiomaQuechua_5,
                popuplayertitle: 'Idioma Quechua',
                interactive: true,
                title: 'Idioma Quechua',
                renderOrder: renderOrderer
            });

//PORTUGUES
var features_IdiomaPortugus_6 = filtrar_idioma(features_Localidades, 'Pt');
var jsonSource_IdiomaPortugus_6 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaPortugus_6.addFeatures(features_IdiomaPortugus_6);

var lyr_IdiomaPortugus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaPortugus_6, 
                style: style_IdiomaPortugus_6,
                popuplayertitle: 'Idioma Portugués',
                interactive: true,
                title: 'Idioma Portugués',
                renderOrder: renderOrderer
            });

//ITALIANO
var features_IdiomaItaliano_7 = filtrar_idioma(features_Localidades, 'It');
var jsonSource_IdiomaItaliano_7 = new ol.source.Vector({attributions: ' ',
});
jsonSource_IdiomaItaliano_7.addFeatures(features_IdiomaItaliano_7);

var lyr_IdiomaItaliano_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaItaliano_7, 
                style: style_IdiomaItaliano_7,
                popuplayertitle: 'Idioma Italiano',
                interactive: true,
                title: 'Idioma Italiano',
                renderOrder: renderOrderer
            });

//GUARANI
var features_IdiomaGuaran_8 = filtrar_idioma(features_Localidades, 'Gn');
var jsonSource_IdiomaGuaran_8 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaGuaran_8.addFeatures(features_IdiomaGuaran_8);

var lyr_IdiomaGuaran_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaGuaran_8, 
                style: style_IdiomaGuaran_8,
                popuplayertitle: 'Idioma Guaraní',
                interactive: true,
                title: 'Idioma Guaraní',
                renderOrder: renderOrderer
            });

//FRANCES
var features_IdiomaFrancs_9 = filtrar_idioma(features_Localidades, 'Fr');
var jsonSource_IdiomaFrancs_9 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaFrancs_9.addFeatures(features_IdiomaFrancs_9);

var lyr_IdiomaFrancs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaFrancs_9, 
                style: style_IdiomaFrancs_9,
                popuplayertitle: 'Idioma Francés',
                interactive: true,
                title: 'Idioma Francés',
                renderOrder: renderOrderer
            });

//INGLES
var features_IdiomaIngls_10 = filtrar_idioma(features_Localidades, 'En');
var jsonSource_IdiomaIngls_10 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaIngls_10.addFeatures(features_IdiomaIngls_10);

var lyr_IdiomaIngls_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaIngls_10, 
                style: style_IdiomaIngls_10,
                popuplayertitle: 'Idioma Inglés',
                interactive: true,
                title: 'Idioma Inglés',
                renderOrder: renderOrderer
            });

//ALEMAN
var features_IdiomaAlemn_11 = filtrar_idioma(features_Localidades, 'De');
var jsonSource_IdiomaAlemn_11 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaAlemn_11.addFeatures(features_IdiomaAlemn_11);

var lyr_IdiomaAlemn_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaAlemn_11, 
                style: style_IdiomaAlemn_11,
                popuplayertitle: 'Idioma Alemán',
                interactive: true,
                title: 'Idioma Alemán',
                renderOrder: renderOrderer
            });

//CHINO MANDARIN
var features_IdiomaChinoMandarn_12 = filtrar_idioma(features_Localidades, 'Cmn');
var jsonSource_IdiomaChinoMandarn_12 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaChinoMandarn_12.addFeatures(features_IdiomaChinoMandarn_12);

var lyr_IdiomaChinoMandarn_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaChinoMandarn_12, 
                style: style_IdiomaChinoMandarn_12,
                popuplayertitle: 'Idioma Chino Mandarín',
                interactive: true,
                title: 'Idioma Chino Mandarín',
                renderOrder: renderOrderer
            });

//AYMARA
var features_IdiomaAymara_13 = filtrar_idioma(features_Localidades, 'Ay');
var jsonSource_IdiomaAymara_13 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaAymara_13.addFeatures(features_IdiomaAymara_13);

var lyr_IdiomaAymara_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaAymara_13, 
                style: style_IdiomaAymara_13,
                popuplayertitle: 'Idioma Aymara',
                interactive: true,
                title: 'Idioma Aymara',
                renderOrder: renderOrderer
            });

//MAPUNDUNGUN
var features_IdiomaMapundungn_14 = filtrar_idioma(features_Localidades, 'Arn');
var jsonSource_IdiomaMapundungn_14 = new ol.source.Vector({attributions: ' ',});
jsonSource_IdiomaMapundungn_14.addFeatures(features_IdiomaMapundungn_14);

var lyr_IdiomaMapundungn_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdiomaMapundungn_14, 
                style: style_IdiomaMapundungn_14,
                popuplayertitle: 'Idioma Mapundungún',
                interactive: true,
                title: 'Idioma Mapundungún',
                renderOrder: renderOrderer
            });

//ARABE
var features_Idiomarabe_15 = filtrar_idioma(features_Localidades, 'Ar');
var jsonSource_Idiomarabe_15 = new ol.source.Vector({attributions: ' ',});
jsonSource_Idiomarabe_15.addFeatures(features_Idiomarabe_15);

var lyr_Idiomarabe_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Idiomarabe_15, 
                style: style_Idiomarabe_15,
                popuplayertitle: 'Idioma Árabe',
                interactive: true,
                title: 'Idioma Árabe',
                renderOrder: renderOrderer
            });

//LIMITES PROVINCIALES
//Toma misma referencia de provincias
var lyr_provinciasprovincia_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias, 
                style: style_provinciasprovincia_16,
                popuplayertitle: 'Límites Provinciales',
                interactive: false,
                title: '<img src="styles/legend/provinciasprovincia_16.png" /> Límites Provinciales'
            });


var group_NUEVOS = new ol.layer.Group({
                                layers: [lyr_IdiomaWich_3,lyr_IdiomaTobaQom_4,lyr_IdiomaQuechua_5,lyr_IdiomaPortugus_6,lyr_IdiomaItaliano_7,lyr_IdiomaGuaran_8,lyr_IdiomaFrancs_9,lyr_IdiomaIngls_10,lyr_IdiomaAlemn_11,lyr_IdiomaChinoMandarn_12,lyr_IdiomaAymara_13,lyr_IdiomaMapundungn_14,lyr_Idiomarabe_15,],
                                fold: 'open',
                                title: 'Localidades por Idioma'});

lyr_OSMStandard_0.setVisible(false);lyr_argenmap_0.setVisible(true);
lyr_Sudamericasudamerica_1.setVisible(true);lyr_Provincias_2.setVisible(true);
lyr_IdiomaWich_3.setVisible(false);lyr_IdiomaTobaQom_4.setVisible(false);lyr_IdiomaQuechua_5.setVisible(false);lyr_IdiomaPortugus_6.setVisible(false);lyr_IdiomaItaliano_7.setVisible(false);lyr_IdiomaGuaran_8.setVisible(false);lyr_IdiomaFrancs_9.setVisible(false);lyr_IdiomaIngls_10.setVisible(false);lyr_IdiomaAlemn_11.setVisible(false);lyr_IdiomaChinoMandarn_12.setVisible(false);lyr_IdiomaAymara_13.setVisible(false);lyr_IdiomaMapundungn_14.setVisible(false);lyr_Idiomarabe_15.setVisible(false);
lyr_provinciasprovincia_16.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_argenmap_0, lyr_Sudamericasudamerica_1,lyr_Provincias_2,group_NUEVOS,lyr_provinciasprovincia_16];


//CARGAR CAPA TRANSPARENTE PARA QUE FUNCIONE SELECCION DE LENGUAJE
lyr_Idiomarabe_15.setOpacity(0);
lyr_Idiomarabe_15.setVisible(true);
    
setTimeout(() => {
    lyr_Idiomarabe_15.setVisible(false);
    lyr_Idiomarabe_15.setOpacity(1);
}, 100); 


lyr_Sudamericasudamerica_1.set('fieldAliases', {'fid': 'fid', 'geo_point_2d': 'geo_point_2d', 'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_alpha_2_codes': 'iso_3166_1_alpha_2_codes', 'french_short': 'french_short', });
lyr_Provincias_2.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_IdiomaWich_3.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaTobaQom_4.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaQuechua_5.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaPortugus_6.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaItaliano_7.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaGuaran_8.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaFrancs_9.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaIngls_10.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaAlemn_11.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaChinoMandarn_12.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaAymara_13.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_IdiomaMapundungn_14.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_Idiomarabe_15.set('fieldAliases', {'fid': 'fid', 'Provincia': 'Provincia', 'Localidad': 'Localidad', 'TOTAL': 'TOTAL', 'Porcentaje (%)': 'Porcentaje (%)', 'Hablantes': 'Hablantes', 'No Hablantes': 'No Hablantes', });
lyr_provinciasprovincia_16.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'Provincia': 'Provincia', 'Nro INDEC': 'Nro INDEC', 'fdc': 'fdc', 'sag': 'sag', });

lyr_Sudamericasudamerica_1.set('fieldImages', {'fid': 'TextEdit', 'geo_point_2d': 'KeyValue', 'iso3': 'TextEdit', 'status': 'TextEdit', 'color_code': 'TextEdit', 'name': 'TextEdit', 'continent': 'TextEdit', 'region': 'TextEdit', 'iso_3166_1_alpha_2_codes': 'TextEdit', 'french_short': 'TextEdit', });
lyr_Provincias_2.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_IdiomaWich_3.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaTobaQom_4.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaQuechua_5.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaPortugus_6.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaItaliano_7.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaGuaran_8.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaFrancs_9.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaIngls_10.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaAlemn_11.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaChinoMandarn_12.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaAymara_13.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_IdiomaMapundungn_14.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_Idiomarabe_15.set('fieldImages', {'fid': 'TextEdit', 'Provincia': 'TextEdit', 'Localidad': 'TextEdit', 'TOTAL': 'Range', 'Porcentaje (%)': 'Range', 'Hablantes': 'Range', 'No Hablantes': 'Range', });
lyr_provinciasprovincia_16.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'Provincia': '', 'Nro INDEC': '', 'fdc': 'TextEdit', 'sag': 'TextEdit', });

lyr_Sudamericasudamerica_1.set('fieldLabels', {'fid': 'no label', 'geo_point_2d': 'no label', 'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_alpha_2_codes': 'no label', 'french_short': 'no label', });
lyr_Provincias_2.set('fieldLabels', {'gid': 'hidden field', 'entidad': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'hidden field', 'in1': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_IdiomaWich_3.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaTobaQom_4.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaQuechua_5.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaPortugus_6.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaItaliano_7.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaGuaran_8.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaFrancs_9.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaIngls_10.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaAlemn_11.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaChinoMandarn_12.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaAymara_13.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_IdiomaMapundungn_14.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_Idiomarabe_15.set('fieldLabels', {'fid': 'hidden field', 'Provincia': 'inline label - visible with data', 'Localidad': 'inline label - visible with data', 'TOTAL': 'inline label - visible with data', 'Porcentaje (%)': 'inline label - visible with data', 'Hablantes': 'inline label - visible with data', 'No Hablantes': 'inline label - visible with data', });
lyr_provinciasprovincia_16.set('fieldLabels', {'fid': 'no label', 'gid': 'hidden field', 'entidad': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'Provincia': 'inline label - always visible', 'Nro INDEC': 'no label', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_provinciasprovincia_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});



//FUNCION PARA VINCULAR SELECCION EN LISTA CON CAPAS EN MAPA
let Idioma_Seleccionado = null;

function setupLanguageSelector() {
    const languageLayerMap = {
        'De': lyr_IdiomaAlemn_11,
        'Ar': lyr_Idiomarabe_15,
        'Ay': lyr_IdiomaAymara_13,
        'Cmn': lyr_IdiomaChinoMandarn_12,
        'Fr': lyr_IdiomaFrancs_9,
        'Gn': lyr_IdiomaGuaran_8,
        'En': lyr_IdiomaIngls_10,
        'It': lyr_IdiomaItaliano_7,
        'Arn': lyr_IdiomaMapundungn_14,
        'Pt': lyr_IdiomaPortugus_6,
        'Qu': lyr_IdiomaQuechua_5,
        'Tob': lyr_IdiomaTobaQom_4,
        'Wch': lyr_IdiomaWich_3
    };

    const select = document.getElementById('languageSelect');
    if (!select) return;

    select.addEventListener('change', function () {
        const selectedKey = this.value;
        Idioma_Seleccionado = selectedKey

        // Hide all language layers
        Object.keys(languageLayerMap).forEach(layerKey => {
        languageLayerMap[layerKey].setVisible(false);
        });

        // Show selected layer if one was chosen
        if (languageLayerMap[selectedKey]) {
        languageLayerMap[selectedKey].setVisible(true);
        }

        // Hide all legends
        document.querySelectorAll('#languageLegendContainer img').forEach(img => {
        img.style.display = 'none';
        });

        // Show the selected legend
        const legendImg = document.getElementById('legend_' + selectedKey);
        if (legendImg) {
        legendImg.style.display = 'block';
        }
    });
}