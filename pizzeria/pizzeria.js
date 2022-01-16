db.createCollection('cliente', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'cliente',
        required: ['nombre', 'apellido1', 'apellido2', 'direccion', 'codigo_postal', 'localidad', 'provincia', 'telefono'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          apellido1: {
            bsonType: 'string'
          },
          apellido2: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'string'
          },
          codigo_postal: {
            bsonType: 'string'
          },
          localidad: {
            bsonType: 'objectId'
          },
          provincia: {
            bsonType: 'objectId'
          },
          telefono: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  db.createCollection('localidad', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'localidad',
        required: ['nombre', 'provincia'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          provincia: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('provincia', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'provincia',
        required: ['nombre'],
        properties: {
          nombre: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  db.createCollection('pedido', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'pedido',
        required: ['cliente', 'fecha_hora', 'tipo', 'precio', 'tienda'],
        properties: {
          cliente: {
            bsonType: 'objectId'
          },
          fecha_hora: {
            bsonType: 'date'
          },
          tipo: {
            enum:
          },
          precio: {
            bsonType: 'double'
          },
          tienda: {
            bsonType: 'objectId'
          },
          hamburguesa: {
            bsonType: 'objectId'
          },
          bebida: {
            bsonType: 'objectId'
          },
          pizza: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('pizza', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'pizza',
        required: ['nombre', 'descripcion', 'imagen', 'precio', 'categoria'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          descripcion: {
            bsonType: 'string'
          },
          imagen: {
            bsonType: 'binData'
          },
          precio: {
            bsonType: 'double'
          },
          categoria: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  db.createCollection('categoria', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'categoria',
        required: ['nombre'],
        properties: {
          nombre: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  db.createCollection('hamburguesa', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'hamburguesa',
        required: ['nombre', 'descripcion', 'imagen', 'precio'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          descripcion: {
            bsonType: 'string'
          },
          imagen: {
            bsonType: 'binData'
          },
          precio: {
            bsonType: 'double'
          }
        }
      }
    }
  });

  db.createCollection('bebida', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'bebida',
        required: ['nombre', 'descripcion', 'imagen', 'precio'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          descripcion: {
            bsonType: 'string'
          },
          imagen: {
            bsonType: 'binData'
          },
          precio: {
            bsonType: 'double'
          }
        }
      }
    }
  });

  db.createCollection('tienda', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'tienda',
        required: ['localidad', 'provincia'],
        properties: {
          direccion: {
            bsonType: 'string'
          },
          codigo_postal: {
            bsonType: 'string'
          },
          localidad: {
            bsonType: 'objectId'
          },
          provincia: {
            bsonType: 'objectId'
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
        required: ['tienda', 'nombre', 'apellido1', 'apellido2', 'nif', 'telefono', 'cargo'],
        properties: {
          tienda: {
            bsonType: 'objectId'
          },
          nombre: {
            bsonType: 'string'
          },
          apellido1: {
            bsonType: 'string'
          },
          apellido2: {
            bsonType: 'string'
          },
          nif: {
            bsonType: 'string'
          },
          telefono: {
            bsonType: 'string'
          },
          cargo: {
            enum:
          },
          pedido_entregado: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  db.createCollection('pedido_entregado', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'pedido_entregado',
        required: ['fecha_hora', 'empleado', 'pedido'],
        properties: {
          fecha_hora: {
            bsonType: 'date'
          },
          empleado: {
            bsonType: 'objectId'
          },
          pedido: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });