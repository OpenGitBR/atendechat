const messages = {
  es: {
    translations: {
      signup: {
        title: "Registrarse",
        toasts: {
          success: "¡Usuario creado exitosamente! ¡Inicie sesión!",
          fail: "Error al crear usuario. Verifique los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Registrarse",
          login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
        },
      },
      login: {
        title: "Iniciar sesión",
        form: {
          email: "Correo electrónico",
          password: "Contraseña",
        },
        buttons: {
          submit: "Iniciar sesión",
          register: " ¡Crea tu cuenta en solo unos clics!",
        },
      },
      plans: {
        form: {
          name: "Nombre",
          users: "Usuarios",
          connections: "Conexiones",
          campaigns: "Campañas",
          schedules: "Programaciones",
          enabled: "Habilitadas",
          disabled: "Deshabilitadas",
          clear: "Cancelar",
          delete: "Eliminar",
          save: "Guardar",
          yes: "Sí",
          no: "No",
          money: "R$",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de la Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "¡Empresa creada exitosamente!",
        },
      },
      auth: {
        toasts: {
          success: "¡Inicio de sesión exitoso!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones de hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "¡Conexión con WhatsApp eliminada exitosamente!",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Estás seguro? Deberás volver a leer el código QR.",
        },
        buttons: {
          add: "Agregar WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Intentar de nuevo",
          qrcode: "CÓDIGO QR",
          newQr: "Nuevo CÓDIGO QR",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrate de que tu teléfono esté conectado a internet e inténtalo nuevamente, o solicita un nuevo código QR",
          },
          qrcode: {
            title: "Esperando lectura del código QR",
            content:
              "Haz clic en el botón 'CÓDIGO QR' y lee el código QR con tu teléfono para iniciar sesión",
          },
          connected: {
            title: "¡Conexión establecida!",
          },
          timeout: {
            title: "Se perdió la conexión con el teléfono",
            content:
              "Asegúrate de que tu teléfono esté conectado a internet y WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
		table: {
  name: "Nombre",
  status: "Estado",
  lastUpdate: "Última actualización",
  default: "Predeterminado",
  actions: "Acciones",
  session: "Sesión",
},
whatsappModal: {
  title: {
    add: "Agregar WhatsApp",
    edit: "Editar WhatsApp",
  },
  tabs: {
    general: "General",
    messages: "Mensajes",
    assessments: "Evaluaciones",
    integrations: "Integraciones",
    schedules: "Horario de expediente",
  },
  form: {
    name: "Nombre",
    default: "Predeterminado",
    sendIdQueue: "Fila",
    timeSendQueue: "Redireccionar a cola en X minutos",
    queueRedirection: "Redirección de cola",
    outOfHoursMessage: "Mensaje de fuera de expediente",
    queueRedirectionDesc: "Seleccione una fila para redirigir los contactos que no tienen cola",
    prompt: "Prompt",
    expiresTicket: "Cerrar chats abiertos después de X minutos",
    expiresInactiveMessage: "Mensaje de cierre por inactividad",
    greetingMessage: "Mensaje de saludo",
    complationMessage: "Mensaje de conclusión",
    sendIdQueue: "Fila",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
  success: "WhatsApp guardado con éxito.",
},
qrCode: {
  message: "Lea el código QR para iniciar sesión",
},
contacts: {
  title: "Contactos",
  toasts: {
    deleted: "Contacto eliminado con éxito!",
    deletedAll: "Todos los contactos eliminados con éxito!",
  },
  searchPlaceholder: "Buscar...",
  confirmationModal: {
    deleteTitle: "Eliminar ",
    deleteAllTitle: "Eliminar Todos",
    importTitle: "Importar contactos",
    deleteMessage: "¿Seguro que desea eliminar este contacto? Se perderán todos los tickets relacionados.",
    deleteAllMessage: "¿Seguro que desea eliminar todos los contactos? Se perderán todos los tickets relacionados.",
    importMessage: "¿Desea importar todos los contactos del teléfono?",
  },
  buttons: {
    import: "Importar Contactos",
    add: "Agregar Contacto",
    export: "Exportar Contactos",
    delete: "Eliminar Todos Contactos",
  },
  table: {
    name: "Nombre",
    whatsapp: "WhatsApp",
    email: "Correo electrónico",
    actions: "Acciones",
  },
},
queueIntegrationModal: {
  title: {
    add: "Agregar proyecto",
    edit: "Editar proyecto",
  },
  form: {
    id: "ID",
    type: "Tipo",
    name: "Nombre",
    projectName: "Nombre del Proyecto",
    language: "Lenguaje",
    jsonContent: "JsonContent",
    urlN8N: "URL",
    typebotSlug: "Typebot - Slug",
    typebotExpires: "Tiempo en minutos para expirar una conversación",
    typebotKeywordFinish: "Palabra para finalizar el ticket",
    typebotKeywordRestart: "Palabra para reiniciar el flujo",
    typebotRestartMessage: "Mensaje al reiniciar la conversación",
    typebotUnknownMessage: "Mensaje de opción inválida",
    typebotDelayMessage: "Intervalo (ms) entre mensajes",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
    test: "Probar Bot",
  },
  messages: {
    testSuccess: "Integración probada con éxito!",
    addSuccess: "Integración agregada con éxito.",
    editSuccess: "Integración editada con éxito.",
  },
},
sideMenu: {
  name: "Menú Lateral Inicial",
  note: "Si está habilitado, el menú lateral se iniciará cerrado",
  options: {
    enabled: "Abierto",
    disabled: "Cerrado",
  },
},
promptModal: {
  form: {
    name: "Nombre",
    prompt: "Prompt",
    voice: "Voz",
    max_tokens: "Máximo de Tokens en la respuesta",
    temperature: "Temperatura",
    apikey: "API Key",
    max_messages: "Máximo de mensajes en el Historial",
    voiceKey: "Clave de la API de Voz",
    voiceRegion: "Región de Voz",
  },
  success: "Prompt guardado con éxito!",
  title: {
    add: "Agregar Prompt",
    edit: "Editar Prompt",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
},
prompts: {
  title: "Prompts",
  table: {
    name: "Nombre",
    queue: "Sector/Cola",
    max_tokens: "Máximo Tokens Respuesta",
    actions: "Acciones",
  },
  confirmationModal: {
    deleteTitle: "Eliminar",
    deleteMessage: "¿Está seguro? ¡Esta acción no se puede deshacer!",
  },
  buttons: {
    add: "Agregar Prompt",
  },
},
contactModal: {
  title: {
    add: "Agregar contacto",
    edit: "Editar contacto",
  },
  form: {
    mainInfo: "Datos del contacto",
    extraInfo: "Información adicional",
    name: "Nombre",
    number: "Número de Whatsapp",
    email: "Email",
    extraName: "Nombre del campo",
    extraValue: "Valor",
    whatsapp: "Conexión Origen: "
  },
  buttons: {
    addExtraInfo: "Agregar información",
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
  success: "Contacto guardado con éxito.",
},
queueModal: {
  title: {
    add: "Agregar cola",
    edit: "Editar cola",
  },
  form: {
    name: "Nombre",
    color: "Color",
    greetingMessage: "Mensaje de saludo",
    complationMessage: "Mensaje de conclusión",
    outOfHoursMessage: "Mensaje de fuera de horario",
    ratingMessage: "Mensaje de evaluación",
    token: "Token",
    orderQueue: "Orden de la cola (Bot)",
    integrationId: "Integración",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
},
userModal: {
  title: {
    add: "Agregar usuario",
    edit: "Editar usuario",
  },
  form: {
    name: "Nombre",
    email: "Email",
    password: "Contraseña",
    profile: "Perfil",
    whatsapp: "Conexión Predeterminada",

    allTicket: "Ticket Sin Cola [Invisible]",
    allTicketEnabled: "Habilitado",
    allTicketDesabled: "Deshabilitado",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
  success: "Usuario guardado con éxito.",
},
scheduleModal: {
  title: {
    add: "Nuevo Agendamiento",
    edit: "Editar Agendamiento",
  },
  form: {
    body: "Mensaje",
    contact: "Contacto",
    sendAt: "Fecha de Agendamiento",
    sentAt: "Fecha de Envío",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
  success: "Agendamiento guardado con éxito.",
},
tagModal: {
  title: {
    add: "Nueva Etiqueta",
    edit: "Editar Etiqueta",
  },
  form: {
    name: "Nombre",
    color: "Color",
  },
  buttons: {
    okAdd: "Agregar",
    okEdit: "Guardar",
    cancel: "Cancelar",
  },
  success: "Etiqueta guardada con éxito.",
},
chat: {
  noTicketMessage: "Seleccione un ticket para comenzar a conversar.",
},
uploads: {
  titles: {
    titleUploadMsgDragDrop: "ARRASTRE Y SUELTE ARCHIVOS EN EL CAMPO ABAJO",
    titleFileList: "Lista de archivo(s)"
  },
},
ticketsManager: {
  buttons: {
    newTicket: "Nuevo",
  },
},
ticketsQueueSelect: {
  placeholder: "Colas",
},
tickets: {
  toasts: {
    deleted: "La atención en la que estaba ha sido eliminada.",
  },
  notification: {
    message: "Mensaje de",
  },
  tabs: {
    open: { title: "Abiertas" },
    closed: { title: "Resueltos" },
    search: { title: "Búsqueda" },
  },
  search: {
    placeholder: "Buscar atención y mensajes",
  },
  buttons: {
    showAll: "Todos",
  },
},
transferTicketModal: {
    title: "Transferir Ticket",
    fieldLabel: "Escribe para buscar usuarios",
    fieldQueueLabel: "Transferir a cola",
    fieldQueuePlaceholder: "Seleccione una cola",
    noOptions: "No se encontraron usuarios con ese nombre",
    buttons: {
      ok: "Transferir",
      cancel: "Cancelar",
    },
  },
  ticketsList: {
    pendingHeader: "Pendiente",
    assignedHeader: "Atendiendo",
    noTicketsTitle: "¡Nada aquí!",
    noTicketsMessage:
      "No se encontraron tickets con este estado o término de búsqueda",
    buttons: {
      accept: "Aceptar",
      closed: "Finalizar",
      reopen: "Reabrir"
    },
  },
  newTicketModal: {
    title: "Crear Ticket",
    fieldLabel: "Escribe para buscar el contacto",
    add: "Agregar",
    buttons: {
      ok: "Guardar",
      cancel: "Cancelar",
    },
  },
  mainDrawer: {
    listItems: {
      dashboard: "Tablero",
      connections: "Conexiones",
      tickets: "Tickets",
      quickMessages: "Respuestas Rápidas",
      contacts: "Contactos",
      queues: "Colas y Chatbot",
      tags: "Etiquetas",
      administration: "Administración",
      users: "Usuarios",
      settings: "Configuraciones",
      helps: "Ayuda",
      messagesAPI: "API",
      schedules: "Agendamientos",
      campaigns: "Campañas",
      annoucements: "Anuncios",
      chats: "Chat Interno",
      financeiro: "Financiero",
      files: "Lista de archivos",
      prompts: "Open.Ai",
      queueIntegration: "Integraciones",
    },
    appBar: {
      notRegister:"Sin notificaciones",
      user: {
        profile: "Perfil",
        logout: "Salir",
      },
    },
  },
  queueIntegration: {
    title: "Integraciones",
    table: {
      id: "ID",
      type: "Tipo",
      name: "Nombre",
      projectName: "Nombre del Proyecto",
      language: "Idioma",
      lastUpdate: "Última actualización",
      actions: "Acciones",
    },
    buttons: {
      add: "Agregar Proyecto",
    },
    searchPlaceholder: "Buscar...",
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage:
        "¿Estás seguro? ¡Esta acción no se puede deshacer! y se eliminará de las colas y conexiones vinculadas",
    },
  },
  files: {
    title: "Lista de archivos",
    table: {
      name: "Nombre",
      contacts: "Contactos",
      actions: "Acción",
    },
    toasts: {
      deleted: "¡Lista eliminada correctamente!",
      deletedAll: "¡Todas las listas se han eliminado correctamente!",
    },
    buttons: {
      add: "Agregar",
      deleteAll: "Eliminar Todos",
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteAllTitle: "Eliminar Todos",
      deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
      deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?",
    },
  },
  messagesAPI: {
    title: "API",
    textMessage: {
      number: "Número",
      body: "Mensaje",
      token: "Token registrado",
    },
    mediaMessage: {
      number: "Número",
      body: "Nombre del archivo",
      media: "Archivo",
      token: "Token registrado",
    },
  },
  notifications: {
    noTickets: "No hay notificaciones.",
  },
  quickMessages: {
    title: "Respuestas Rápidas",
    searchPlaceholder: "Buscar...",
    noAttachment: "Sin adjunto",
    confirmationModal: {
      deleteTitle: "Eliminación",
      deleteMessage: "¡Esta acción es irreversible! ¿Quieres continuar?",
    },
    buttons: {
      add: "Agregar",
      attach: "Adjuntar Archivo",
      cancel: "Cancelar",
      edit: "Editar",
    },
    toasts: {
      success: "¡Atajo agregado correctamente!",
      deleted: "¡Atajo eliminado correctamente!",
    },
    dialog: {
      title: "Mensaje Rápido",
      shortcode: "Atajo",
      message: "Respuesta",
      save: "Guardar",
      cancel: "Cancelar",
      geral: "Permitir editar",
      add: "Agregar",
      edit: "Editar",
      visao: "Permitir vista",
    },
    table: {
      shortcode: "Atajo",
      message: "Mensaje",
      actions: "Acciones",
      mediaName: "Nombre del Archivo",
      status: "Estado",
    },
  },
  messageVariablesPicker: {
    label: "Variables disponibles",
    vars: {
      contactFirstName: "Primer Nombre",
      contactName: "Nombre",
      greeting: "Saludo",
      protocolNumber: "Protocolo",
      date: "Fecha",
      hour: "Hora",
    },
  },
  contactLists: {
    title: "Listas de Contactos",
    table: {
      name: "Nombre",
      contacts: "Contactos",
      actions: "Acciones",
    },
    buttons: {
      add: "Nueva Lista",
    },
    dialog: {
      name: "Nombre",
      company: "Empresa",
      okEdit: "Editar",
      okAdd: "Agregar",
      add: "Agregar",
      edit: "Editar",
      cancel: "Cancelar",
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage: "Esta acción no se puede deshacer.",
    },
    toasts: {
      deleted: "Registro eliminado",
    },
  },
  contactListItems: {
    title: "Contactos",
    searchPlaceholder: "Búsqueda",
    buttons: {
      add: "Nuevo",
      lists: "Listas",
      import: "Importar",
    },
    dialog: {
      name: "Nombre",
      number: "Número",
      whatsapp: "Whatsapp",
      email: "Correo electrónico",
      okEdit: "Editar",
      okAdd: "Agregar",
      add: "Agregar",
      edit: "Editar",
      cancel: "Cancelar",
    },
    table: {
      name: "Nombre",
      number: "Número",
      whatsapp: "Whatsapp",
      email: "Correo electrónico",
      actions: "Acciones",
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage: "Esta acción no se puede deshacer.",
      importMessage: "¿Desea importar los contactos de esta hoja de cálculo?",
      importTitlte: "Importar",
    },
    toasts: {
      deleted: "Registro eliminado",
    },
  },
  campaigns: {
    title: "Campañas",
    searchPlaceholder: "Búsqueda",
    buttons: {
      add: "Nueva Campaña",
      contactLists: "Listas de Contactos",
    },
    table: {
      name: "Nombre",
      whatsapp: "Conexión",
      contactList: "Lista de Contactos",
      status: "Estado",
      scheduledAt: "Programada",
      completedAt: "Completada",
      confirmation: "Confirmación",
      actions: "Acciones",
    },
    dialog: {
      new: "Nueva Campaña",
      update: "Editar Campaña",
      readonly: "Solo Lectura",
      form: {
        name: "Nombre",
        message1: "Mensaje 1",
        message2: "Mensaje 2",
        message3: "Mensaje 3",
        message4: "Mensaje 4",
        message5: "Mensaje 5",
        confirmationMessage1: "Mensaje de Confirmación 1",
        confirmationMessage2: "Mensaje de Confirmación 2",
        confirmationMessage3: "Mensaje de Confirmación 3",
        confirmationMessage4: "Mensaje de Confirmación 4",
        confirmationMessage5: "Mensaje de Confirmación 5",
        messagePlaceholder: "Contenido del mensaje",
        whatsapp: "Conexión",
        status: "Estado",
        scheduledAt: "Programada",
        confirmation: "Confirmación",
        contactList: "Lista de Contacto",
        tagList: "Lista de Etiquetas",
        fileList: "Lista de Archivos"
      },
      buttons: {
        add: "Agregar",
        edit: "Actualizar",
        okadd: "Ok",
        cancel: "Cancelar",
        restart: "Reiniciar Campañas",
        close: "Cerrar",
        attach: "Adjuntar Archivo",
      },
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage: "Esta acción no se puede deshacer.",
    },
    toasts: {
      success: "Operación realizada correctamente",
      cancel: "Campaña cancelada",
      restart: "Campañas reiniciadas",
      deleted: "Registro eliminado",
    },
  },
  announcements: {
    active: 'Activo',
    inactive: 'Inactivo',
    title: "Informativos",
    searchPlaceholder: "Búsqueda",
    buttons: {
      add: "Nuevo Informativo",
      contactLists: "Listas de Informativos",
    },
    table: {
      priority: "Prioridad",
      title: "Título",
      text: "Texto",
      mediaName: "Archivo",
      status: "Estado",
      actions: "Acciones",
    },
    dialog: {
      edit: "Editar Informativo",
      add: "Nuevo Informativo",
      update: "Editar Informativo",
      readonly: "Solo Lectura",
      form: {
        priority: "Prioridad",
        title: "Título",
        text: "Texto",
        mediaPath: "Archivo",
        status: "Estado",
      },
      buttons: {
        add: "Agregar",
        edit: "Actualizar",
        okadd: "Ok",
        cancel: "Cancelar",
        close: "Cerrar",
        attach: "Adjuntar Archivo",
      },
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage: "Esta acción no se puede deshacer.",
    },
    toasts: {
      success: "Operación realizada correctamente",
      deleted: "Registro eliminado",
    },
  },
  campaignsConfig: {
    title: "Configuraciones de Campañas",
  },
  queues: {
    title: "Colas y Chatbot",
    table: {
      id:"ID",
      name: "Nombre",
      color: "Color",
      greeting: "Mensaje de bienvenida",
      actions: "Acciones",
      orderQueue: "Orden de la cola (bot)",
    },
    buttons: {
      add: "Agregar cola",
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage:
        "¿Estás seguro? ¡Esta acción no se puede deshacer! Los tickets de esta cola seguirán existiendo pero ya no tendrán ninguna cola asignada.",
    },
  },
  queueSelect: {
    inputLabel: "Colas",
  },
  users: {
    title: "Usuarios",
    table: {
	  id: "ID",
      name: "Nombre",
      email: "Email",
      profile: "Perfil",
      actions: "Acciones",
    },
    buttons: {
      add: "Agregar usuario",
    },
    toasts: {
      deleted: "Usuario eliminado correctamente.",
    },
    confirmationModal: {
      deleteTitle: "Eliminar",
      deleteMessage:
        "Todos los datos del usuario se perderán. Los tickets abiertos de este usuario se moverán a la cola.",
    },
  },
  helps: {
    title: "Centro de Ayuda",
  },
  schedules: {
    title: "Agendamientos",
    confirmationModal: {
      deleteTitle: "¿Estás seguro que quieres eliminar este Agendamiento?",
      deleteMessage: "Esta acción no se puede deshacer.",
    },
    table: {
      contact: "Contacto",
      body: "Mensaje",
      sendAt: "Fecha de Agendamiento",
      sentAt: "Fecha de Envío",
      status: "Estado",
      actions: "Acciones",
    },
    buttons: {
      add: "Nuevo Agendamiento",
    },
    toasts: {
      deleted: "Agendamiento eliminado correctamente.",
    },
  },
  tags: {
    title: "Etiquetas",
    confirmationModal: {
      deleteTitle: "¿Estás seguro que quieres eliminar esta Etiqueta?",
      deleteMessage: "Esta acción no se puede deshacer.",
	  deleteAllMessage: "¿Estás seguro que quieres eliminar todas las Etiquetas?",
	  deleteAllTitle: "Eliminar Todas",
    },
    table: {
      name: "Nombre",
      color: "Color",
      tickets: "Tickets Etiquetados",
      actions: "Acciones",
    },
    buttons: {
      add: "Nueva Etiqueta",
	  deleteAll: "Eliminar Todas",
    },
    toasts: {
	  deletedAll: "¡Todas las Etiquetas se han eliminado correctamente!",
      deleted: "Etiqueta eliminada correctamente.",
    },
  },
  settings: {
    success: "Configuraciones guardadas correctamente.",
    title: "Configuraciones",
    settings: {
      userCreation: {
        name: "Creación de usuario",
        options: {
          enabled: "Habilitado",
          disabled: "Deshabilitado",
        },
      },
    },
  },
  messagesList: {
    header: {
      assignedTo: "Asignado a:",
      buttons: {
        return: "Volver",
        resolve: "Resolver",
        reopen: "Reabrir",
        accept: "Aceptar",
      },
    },
  },
  messagesInput: {
    placeholderOpen: "Escribe un mensaje",
    placeholderClosed:
      "Reabra o acepte este ticket para enviar un mensaje.",
    signMessage: "Firmar",
  },
  contactDrawer: {
    header: "Datos del contacto",
    buttons: {
      edit: "Editar contacto",
    },
    extraInfo: "Información adicional",
  },
  fileModal: {
    title: {
      add: "Agregar lista de archivos",
      edit: "Editar lista de archivos",
    },
    buttons: {
      okAdd: "Guardar",
      okEdit: "Editar",
      cancel: "Cancelar",
      fileOptions: "Agregar archivo",
    },
    form: {
      name: "Nombre de la lista de archivos",
      message: "Detalles de la lista",
      fileOptions: "Lista de archivos",
      extraName: "Mensaje para enviar con archivo",
      extraValue: "Valor de la opción",
    },
    success: "Lista de archivos guardada correctamente!",
  },
  ticketOptionsMenu: {
    schedule: "Programación",
    delete: "Eliminar",
    transfer: "Transferir",
    registerAppointment: "Observaciones del Contacto",
    appointmentsModal: {
      title: "Observaciones del Contacto",
      textarea: "Observación",
      placeholder: "Inserta aquí la información que deseas registrar",
    },
    confirmationModal: {
      title: "Eliminar el ticket",
	  titleFrom: "del contacto ",
      message:
        "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
    },
    buttons: {
      delete: "Eliminar",
      cancel: "Cancelar",
    },
  },
  confirmationModal: {
    buttons: {
      confirm: "Ok",
      cancel: "Cancelar",
    },
  },
  messageOptionsMenu: {
    delete: "Eliminar",
    reply: "Responder",
    confirmationModal: {
      title: "¿Eliminar mensaje?",
      message: "Esta acción no se puede deshacer.",
    },
  },
  backendErrors: {
    ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
    ERR_NO_DEF_WAPP_FOUND:
      "No se encontró ningún WhatsApp predeterminado. Comprueba la página de conexiones.",
    ERR_WAPP_NOT_INITIALIZED:
      "Esta sesión de WhatsApp no se ha inicializado. Comprueba la página de conexiones.",
    ERR_WAPP_CHECK_CONTACT:
      "No se pudo verificar el contacto de WhatsApp. Comprueba la página de conexiones",
    ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
    ERR_WAPP_DOWNLOAD_MEDIA:
      "No se pudo descargar medios de WhatsApp. Comprueba la página de conexiones.",
    ERR_INVALID_CREDENTIALS:
      "Error de autenticación. Por favor, inténtalo de nuevo.",
    ERR_SENDING_WAPP_MSG:
      "Error al enviar mensaje de WhatsApp. Comprueba la página de conexiones.",
    ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
    ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
    ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicia sesión.",
    ERR_USER_CREATION_DISABLED:
      "La creación de usuarios ha sido deshabilitada por el administrador.",
    ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
    ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
    ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con esta ID.",
    ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con esta ID.",
    ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con esta ID.",
    ERR_NO_USER_FOUND: "No se encontró ningún usuario con esta ID.",
    ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con esta ID.",
    ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
    ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
    ERR_FETCH_WAPP_MSG:
      "Error al obtener mensaje de WhatsApp, puede que sea muy antiguo.",
    ERR_QUEUE_COLOR_ALREADY_EXISTS:
      "Este color ya está en uso, elige otro.",
    ERR_WAPP_GREETING_REQUIRED:
      "El saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
 },
};

export { messages };
