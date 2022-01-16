db.createCollection('proveedor', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'proveedor',
        required: ['nombre', 'direccion', 'telefono', 'fax', 'nif'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'array',
            items: {}
          },
          telefono: {
            bsonType: 'string'
          },
          fax: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  db.createCollection('marca', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'marca',
        required: ['nombre', 'proveedor'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          proveedor: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('gafas', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'gafas',
        required: ['graduacion', 'tipo_montura', 'color_montura', 'color_cristal', 'precio', 'marca'],
        properties: {
          graduacion: {
            bsonType: 'array',
            items: {}
          },
          tipo_montura: {
            enum:
          },
          color_montura: {
            bsonType: 'string'
          },
          color_cristal: {
            bsonType: 'string'
          },
          precio: {
            bsonType: 'double'
          },
          marca: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('cliente', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'cliente',
        required: ['nombre', 'direccion', 'telefono', 'email', 'fecha_registro'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'array',
            items: {}
          },
          telefono: {
            bsonType: 'string'
          },
          email: {
            bsonType: 'string'
          },
          fecha_registro: {
            bsonType: 'date'
          },
          cliente_referido: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('venta', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'venta',
        required: ['empleado', 'gafas', 'cliente', 'fecha'],
        properties: {
          empleado: {
            bsonType: 'objectId'
          },
          gafas: {
            bsonType: 'objectId'
          },
          cliente: {
            bsonType: 'objectId'
          },
          fecha: {
            bsonType: 'date'
          }
        }
      }
    }
  });

  db.createCollection('empleado', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'empleado',
        required: ['nombre'],
        properties: {
          nombre: {
            bsonType: 'string'
          }
        }
      }
    }
  });