use PIZZERIA

db.createCollection('cliente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'cliente',
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
          bsonType: 'object',
          title: 'direccion',
          required: ['localidad'],
          properties: {
            calle: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'string'
            },
            piso: {
              bsonType: 'string'
            },
            puerta: {
              bsonType: 'string'
            },
            codigo_postal: {
              bsonType: 'string'
            },
            localidad: {
              bsonType: 'objectId'
            }
          }
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
      required: ['provincia'],
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
      properties: {
        nombre: {
          bsonType: 'string'
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
      required: ['empleado'],
      properties: {
        direccion: {
          bsonType: 'object',
          title: 'direccion',
          required: ['localidad'],
          properties: {
            calle: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'string'
            },
            piso: {
              bsonType: 'string'
            },
            puerta: {
              bsonType: 'string'
            },
            codigo_postal: {
              bsonType: 'string'
            },
            localidad: {
              bsonType: 'objectId'
            }
          }
        },
        empleado: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
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
        nif: {
          bsonType: 'string'
        },
        telefono: {
          bsonType: 'string'
        },
        cargo: {
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
      required: ['cliente', 'tienda', 'producto'],
      properties: {
        fecha_hora: {
          bsonType: 'date'
        },
        tipo: {
          enum: ('domicilio', 'recoger')
        },
        precio: {
          bsonType: 'double'
        },
        reparto_domicilio: {
          bsonType: 'object',
          title: 'reparto_domicilio',
          required: ['repartidor'],
          properties: {
            hora_entrega: {
              bsonType: 'date'
            },
            repartidor: {
              bsonType: 'objectId'
            }
          }
        },
        cliente: {
          bsonType: 'objectId'
        },
        tienda: {
          bsonType: 'objectId'
        },
        producto: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});
db.createCollection('producto', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'producto',
      required: ['categoria'],
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
        tipo: {
          enum: ('pizza', 'hamburguesa', 'bebida')
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
      properties: {
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});